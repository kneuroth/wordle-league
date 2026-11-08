import { drizzle } from "drizzle-orm/node-postgres";
import { scoreTable } from "../src/db/schema";
import { sql } from "drizzle-orm";
import { loadStageEnv } from "../scripts/load-stage-env";

async function main() {
  const stage = loadStageEnv();
  console.log(`Clearing all scores in ${stage}...`);
  const db = drizzle(process.env.DATABASE_URL!);
  await db.execute(sql`DELETE FROM ${scoreTable};`);
}
main();