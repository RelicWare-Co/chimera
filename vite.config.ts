import { telefunc } from "telefunc/vite";
import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
	plugins: [
		devServer({
			entry: "hono-entry.ts",

			exclude: [
				/^\/@.+$/,
				/.*\.(ts|tsx|vue)($|\?)/,
				/.*\.(s?css|less)($|\?)/,
				/^\/favicon\.ico$/,
				/.*\.(svg|png)($|\?)/,
				/^\/(public|assets|static)\/.+/,
				/^\/node_modules\/.*/,
			],

			injectClientScript: false,
		}),
		react({}),
		ssr({}),
		telefunc(),
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: fileURLToPath(new URL("./", import.meta.url)),
			},
		],
	},
});
