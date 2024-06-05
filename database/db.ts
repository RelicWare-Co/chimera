import Database from "libsql";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";
const sqlite = new Database("database.db", {
});


export const db = drizzle(sqlite, { schema });