# Wordle League

A serverless Telegram bot that tracks Wordle scores, generates visual scoreboards, and posts daily summaries to group chats.

## Tech Stack

- **Runtime**: Node.js 20.x on AWS Lambda
- **Framework**: Serverless Framework
- **Database**: Neon PostgreSQL + Drizzle ORM
- **Image Generation**: Puppeteer + Chromium (Lambda layer)
- **Templating**: Handlebars for HTML scoreboard/podium templates
- **Validation**: Zod for runtime parsing

## Project Structure

```
src/
├── functions/          # Lambda handlers
│   ├── receiver.ts     # Telegram webhook handler
│   ├── sender.ts       # Daily scoreboard sender (cron)
│   ├── scoreboards.ts  # Scoreboard API endpoints
│   └── scores.ts       # Score CRUD operations
├── model/              # TypeScript interfaces
├── db/                 # Drizzle schema
├── util/               # Utilities (browser, html-generation, etc.)
├── constants/
│   ├── templates/
│   │   ├── scoreboards/  # Scoreboard HTML templates
│   │   ├── podiums/      # Podium HTML templates
│   │   └── icons/        # PNG emoji icons (must be square)
│   ├── svgs.ts           # SVG icon definitions
│   └── svg-maps.ts       # SVG icon mappings
├── dev/                # Local preview scripts
scripts/
├── build-templates.ts  # Compiles Handlebars templates
└── build-png-icons.ts  # Converts PNGs to base64 for embedding
drizzle/
├── seed.ts             # Seed database with test data
└── clear.ts            # Clear all database data
```

## Development

### Prerequisites

- Node.js 20.x
- npm
- AWS CLI configured (for deployment)
- `.env` file with `DATABASE_URL` and `BOT_TOKEN`

### Commands

```bash
# Install dependencies
npm install

# Build templates and icons (required before deploy)
npm run build

# Live preview scoreboard templates
npm run dev:scoreboard

# Live preview podium templates
npm run dev:podium

# Seed database with test data
npx tsx drizzle/seed.ts

# Clear database
npx tsx drizzle/clear.ts
```

### Template Development

1. Run `npm run dev:scoreboard` or `npm run dev:podium`
2. Edit templates in `src/constants/templates/scoreboards/` or `podiums/`
3. Open `scoreboard-preview.html` or `podium-preview.html` in your browser
4. Templates hot-reload on save

**Important**: Templates are rendered to static PNG images via Puppeteer. No hover states, transitions, or interactive CSS will work.

### Adding Icons

1. Add square PNG files to `src/constants/templates/icons/`
2. Run `npm run build` to generate base64 embeddings
3. Import from `@constants/png-icons.ts` (e.g., `FIRE_PNG`)

Icons are rendered at 32x32 pixels, so source images should be square.

## Deployment

```bash
# Deploy to dev environment
serverless deploy

# Deploy to production
serverless deploy --stage production

# Run locally
serverless dev
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/sendMessage` | Telegram webhook receiver |
| GET | `/scoreboards/raw` | Raw scoreboard JSON data |
| GET | `/scoreboards/html/{chat_id}` | HTML scoreboard for a chat |
| GET | `/scores` | Get all scores |
| POST | `/score` | Add a score |
| DELETE | `/score` | Delete a score |
| DELETE | `/scores` | Clear all scores |

## How-To: Rotate the Bot API Token

If the Telegram bot token is compromised or needs to be cycled, follow all three steps — skipping any one of them will break the bot.

### 1. Get a new token from BotFather

Open Telegram and message [@BotFather](https://t.me/BotFather):

```
/mybots
→ select your bot
→ API Token → Revoke current token
```

Copy the new token.

### 2. Update the environment and redeploy

Set the new token in your `.env` file:

```
BOT_TOKEN=<new-token>
```

Then deploy so the Lambda picks up the new value:

```bash
# Dev
serverless deploy

# Production
serverless deploy --stage production
```

### 3. Re-register the webhook with Telegram

Telegram's servers still have the old token and will reject requests signed with it. You need to tell Telegram where to send messages for the new bot token. Run this `curl` (replace placeholders):

```bash
curl -X POST "https://api.telegram.org/bot<NEW_TOKEN>/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://<your-api-gateway-url>/sendMessage"}'
```

You can find your API Gateway URL in the Serverless deploy output, or in the AWS console under API Gateway. A successful response looks like:

```json
{"ok":true,"result":true,"description":"Webhook was set"}
```

To verify the webhook is registered correctly:

```bash
curl "https://api.telegram.org/bot<NEW_TOKEN>/getWebhookInfo"
```

## Architecture

- **Telegram Webhook**: Messages hit `/sendMessage`, parsed for Wordle scores
- **Daily Cron**: `sendScoreboards` runs at 5 AM UTC, generating and posting scoreboard images
- **Image Generation**: Handlebars templates rendered via Puppeteer/Chromium Lambda layer
- **Database**: Neon PostgreSQL stores scores, managed with Drizzle ORM

## Path Aliases

TypeScript path aliases are configured for cleaner imports:

- `@functions/*` -> `src/functions/*`
- `@db/*` -> `src/db/*`
- `@utils/*` -> `src/util/*`
- `@model/*` -> `src/model/*`
- `@constants/*` -> `src/constants/*`
