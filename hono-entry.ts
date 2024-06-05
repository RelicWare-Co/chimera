import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { compress } from "hono/compress";
import { telefunc } from "telefunc";
import { renderPage } from "vike/server";
import { db } from "@/database/db";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

const app = new Hono();

app.use(compress());

if (isProduction) {
	app.use(
		"/*",
		serveStatic({
			root: "dist/client/",
		}),
	);
}

app.all("*", async (c, next) => {
	c.set("db", db);
	await next();
});

app.get("/ocoro", async (c) => {
	return c.json({ message: "Hello World" })
})

app.post("/_telefunc", async (c) => {
	const httpResponse = await telefunc({
		url: c.req.url.toString(),
		method: c.req.method,
		body: await c.req.text(),
		context: {
			...c,
			db: c.get("db"),
		},
	});
	const { body, statusCode, contentType } = httpResponse;

	c.status(statusCode);
	c.header("Content-Type", contentType);

	return c.body(body);
});

app.all("*", async (c, next) => {
	const pageContextInit = {
		urlOriginal: c.req.url,
	};
	const pageContext = await renderPage(pageContextInit);
	const { httpResponse } = pageContext;
	if (!httpResponse) {
		return next();
	}
	const { body, statusCode, headers } = httpResponse;
	for (const [name, value] of headers) {
		c.header(name, value);
	}

	c.status(statusCode);

	return c.body(body);
});

if (isProduction) {
	console.log(`Server listening on http://localhost:${port}`);
	serve({
		fetch: app.fetch,
		port: port,
	});
}

export default app;
