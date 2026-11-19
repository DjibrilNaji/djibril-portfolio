import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Kept apart from vite.config.ts so tests don't boot the TanStack Start / Nitro plugins.
export default defineConfig({
	resolve: {
		alias: { "#": fileURLToPath(new URL("./src", import.meta.url)) },
	},
});
