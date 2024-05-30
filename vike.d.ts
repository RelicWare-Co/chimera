import type * as schema from "@/database/schema";
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";

declare module "hono" {
	interface ContextVariableMap {
		db: BetterSQLite3Database<typeof schema>;
	}
}
