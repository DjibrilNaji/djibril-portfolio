import {
	createRootRoute,
	HeadContent,
	Link,
	Scripts,
	useLocation,
} from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { themeInitScript } from "../components/portfolio/ThemeToggle";
import { langFromPath } from "../i18n";
import appCss from "../styles.css?url";

// Devtools are only loaded in development so they never reach visitors.
const Devtools = import.meta.env.DEV
	? lazy(() => import("../components/Devtools"))
	: () => null;

export const Route = createRootRoute({
	head: () => ({
		// Applies the saved/system theme before first paint (see ThemeToggle.tsx)
		scripts: [{ children: themeInitScript }],
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				name: "theme-color",
				content: "#eeeef5",
				media: "(prefers-color-scheme: light)",
			},
			{
				name: "theme-color",
				content: "#0a0a13",
				media: "(prefers-color-scheme: dark)",
			},
			{ name: "author", content: "Djibril Naji" },
		],
		links: [
			{ rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
			{ rel: "stylesheet", href: appCss },
		],
	}),
	notFoundComponent: NotFound,
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const lang = langFromPath(useLocation({ select: (l) => l.pathname }));

	return (
		<html lang={lang} suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Suspense>
					<Devtools />
				</Suspense>
				<Scripts />
			</body>
		</html>
	);
}

function NotFound() {
	return (
		<main className="mx-auto flex min-h-screen max-w-md flex-col items-start justify-center gap-4 px-6">
			<p className="m-0 text-sm font-semibold tracking-[0.12em] text-violet uppercase">
				404
			</p>
			<h1 className="m-0 text-3xl font-bold tracking-tight">
				Page introuvable · Page not found
			</h1>
			<Link
				to="/"
				className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-on-ink"
			>
				Retour au portfolio
			</Link>
		</main>
	);
}
