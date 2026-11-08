import { config } from 'dotenv';
import { existsSync } from 'fs';

// Local tooling (drizzle-kit, seed, clear) has to name its target stage explicitly, the same
// way deploys do. Loads `.env.<STAGE>` into process.env, or throws if STAGE is missing,
// unknown, or has no env file. Deploys don't use this: Serverless loads `.env.<stage>` itself.
//   STAGE=dev npx tsx drizzle/seed.ts
export const ALLOWED_STAGES = ['dev', 'production'] as const;
export type Stage = (typeof ALLOWED_STAGES)[number];

export function loadStageEnv(): Stage {
  const stage = process.env.STAGE;
  if (!stage || !(ALLOWED_STAGES as readonly string[]).includes(stage)) {
    throw new Error(`Set STAGE to one of: ${ALLOWED_STAGES.join(', ')} (got "${stage ?? ''}")`);
  }

  const envFile = `.env.${stage}`;
  if (!existsSync(envFile)) {
    throw new Error(`Missing ${envFile}. Copy .env.example and fill it in.`);
  }
  config({ path: envFile });
  return stage as Stage;
}
