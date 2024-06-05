import type { Config } from "vike/types";
import Head from "@/layouts/HeadDefault";
import vikeReact from "vike-react/config";
import Layout from "@/layouts/inventory/Layout";

export default {
	Layout,
	Head,
	// <title>
	title: "Restaurante",
	extends: vikeReact,
} satisfies Config;
