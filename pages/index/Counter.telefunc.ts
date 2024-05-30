import { type NewUser, users } from "@/database/schema";
import type { ContextVariableMap } from "hono";
import { getContext } from "telefunc";

export function onGetUsers() {
	const { db } = getContext<ContextVariableMap>();
	return db.query.users.findMany();
}

export async function onCreateUser(data: NewUser) {
	const { db } = getContext<ContextVariableMap>();
	console.log(
		"created users",
		(await db.insert(users).values(data).returning()).values(),
	);
}
