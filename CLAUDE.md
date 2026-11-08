# Wordle League Message Receiver

> **A note to future Claude instances**: This is a living codebase that will outlive any single conversation. Every shortcut you take will be shortcutted again by the next Claude. Every hack compounds. Write code as if you'll inherit it tomorrow - because you will.

## Overview
Serverless backend for a Wordle League Telegram bot that tracks scores, generates scoreboards, and posts daily summaries to group chats.

## Tech Stack
- **Runtime**: Node.js 20.x on AWS Lambda (Serverless Framework)
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Image Generation**: Puppeteer + Chromium (Lambda layer)
- **Templating**: Handlebars for HTML scoreboard/podium templates
- **Language**: TypeScript with path aliases

## Project Structure
```
src/
├── functions/     # Lambda handlers
│   ├── receiver.ts    # Telegram webhook handler
│   ├── sender.ts      # Daily scoreboard sender (cron)
│   ├── scoreboards.ts # Scoreboard API endpoints
│   └── scores.ts      # Score CRUD operations
├── model/         # TypeScript interfaces
│   ├── Score.ts, Scoreboard.ts, Podium.ts, Update.ts, Context.ts
├── db/            # Drizzle schema
├── util/          # Utilities (browser, html-generation, etc.)
├── constants/     # SVGs, templates, icons
│   └── templates/
│       ├── scoreboards/  # Scoreboard HTML templates
│       ├── podiums/      # Podium HTML templates
│       └── icons/        # PNG emoji icons (must be square)
└── dev/           # Local preview scripts
```

## Path Aliases
- `@functions/*` → `src/functions/*`
- `@db/*` → `src/db/*`
- `@utils/*` → `src/util/*`
- `@model/*` → `src/model/*`
- `@constants/*` → `src/constants/*`

## Development Commands
```bash
npm run build              # Compile templates + PNG icons (run before deploy)
npm run dev:scoreboard     # Live preview scoreboard templates
npm run dev:podium         # Live preview podium templates
npm run deploy:dev         # Build + deploy to the dev stage
npm run deploy:prod        # Build + deploy to the production stage
STAGE=dev npx drizzle-kit migrate   # Migrations also require STAGE
```

## Environments
- Two stages: `dev` and `production`. A stage is **required** for every deploy; `serverless.yml` has no default and rejects unknown stage names.
- Variables live in gitignored `.env.dev` / `.env.production` (template: `.env.example`). Serverless loads `.env.<stage>` from `--stage`; Local tooling (`drizzle.config.ts`, `drizzle/seed.ts`, `drizzle/clear.ts`) loads it from `STAGE` via `scripts/load-stage-env.ts`. Use that helper for any new script that reads env vars.
- Don't create a plain `.env`. Serverless falls back to it when a stage file is missing, which defeats the guard.
- Deploy with the global Serverless v4. Don't add a local `serverless` package or `serverless-plugin-typescript`: npm scripts would pick up that local copy instead.

## Key Patterns
- Scoreboards and podiums are HTML templates rendered with Handlebars, then converted to PNG images via Puppeteer - **no hover states, transitions, or interactive CSS** (they're static screenshots)
- PNG icons in `templates/icons/` are converted to base64 at build time - **icons must be square** (rendered at 32x32)
- The `sendScoreboards` function runs daily at midnight America/New_York via EventBridge Scheduler (timezone-aware, so DST is automatic; don't convert it to a UTC cron). It runs in every stage, dev included
- Telegram bot receives messages at `/sendMessage` webhook endpoint
- Chromium binaries are in a Lambda layer for image generation

## API Endpoints
- `POST /sendMessage` - Telegram webhook
- `GET /scoreboards/raw` - Raw scoreboard data
- `GET /scoreboards/html/{chat_id}` - HTML scoreboard for chat
- `GET /scores` - Get all scores
- `POST /score` - Add score
- `DELETE /score` - Delete score
- `DELETE /scores` - Clear all scores
