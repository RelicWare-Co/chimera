import type { Config } from "vike/types";
import Layout from "@/layouts/restaurant/Layout";
import Head from "@/layouts/HeadDefault";
import vikeReact from "vike-react/config";

export default {
	Layout,
	Head,
	// <title>
	title: "Restaurante",
	extends: vikeReact,
} satisfies Config;
