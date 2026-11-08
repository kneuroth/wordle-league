import { defineConfig } from 'drizzle-kit';
import { loadStageEnv } from './scripts/load-stage-env';

// Migrations target an explicit stage: STAGE=dev npx drizzle-kit migrate
loadStageEnv();

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
