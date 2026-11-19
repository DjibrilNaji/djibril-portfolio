// Language-neutral data. Every translated string lives in src/i18n/{fr,en}.ts,
// in lists that line up by index with the ones below.

export const profile = {
	firstName: "Djibril",
	lastName: "Naji",
	title: "Full Stack Developer",
	location: "Paris, France",
	email: "najidjibril@gmail.com",
	linkedin: "https://www.linkedin.com/in/djibrilnaji",
	github: "https://github.com/DjibrilNaji",
	photo: "/djibril.jpg" as string | null,
	// Web3Forms access key (public by design). Empty = fall back to a mailto link.
	contactFormKey: "e00cd3f5-eb36-4e6b-962e-ec5396398192",
};

// shortcut: logos hotlinked from Google's favicon service; move them to public/ if it ever fails.
const favicon = (domain: string) =>
	`https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const trustedBy = [
	{
		name: "TrendTrack",
		logo: favicon("trendtrack.io"),
		url: "https://www.trendtrack.io/fr",
	},
	{ name: "Société Générale", logo: favicon("sg.fr") },
	{ name: "JProject", logo: null },
];

export const highlights = [{ value: "~4" }, { value: "2" }, { value: "5" }];

export const services = [
	{ icon: "layout", tone: "peach" },
	{ icon: "server", tone: "lilac" },
	{ icon: "sparkle", tone: "sky" },
	{ icon: "shield", tone: "mint" },
] as const;

export const tools = [
	{ name: "React", slug: "react" },
	{ name: "Next.js", slug: "nextdotjs", monochrome: true },
	{ name: "TypeScript", slug: "typescript" },
	{ name: "TanStack", slug: "reactquery" },
	{ name: "Node.js", slug: "nodedotjs" },
	{ name: "NestJS", slug: "nestjs" },
	{ name: "Java", slug: "openjdk", monochrome: true },
	{ name: "Spring Boot", slug: "springboot" },
	{ name: "PostgreSQL", slug: "postgresql" },
	{ name: "ClickHouse", slug: "clickhouse" },
	{ name: "Redis", slug: "redis" },
	{ name: "Docker", slug: "docker" },
	{ name: "GitHub Actions", slug: "githubactions" },
	{ name: "Vitest", slug: "vitest" },
	{ name: "PostHog", slug: "posthog", monochrome: true },
	{ name: "Tailwind CSS", slug: "tailwindcss" },
	{ name: "Figma", slug: "figma" },
	{ name: "Claude Code", slug: "claude" },
];

// `span` = grid cells taken on md / lg screens; the pattern below builds a 3-column bento.
export type Project = {
	name: string;
	stack: string[];
	code?: string;
	site?: string;
	span: "full" | "wide" | "single";
};

export const projects: Project[] = [
	{
		name: "TrendTrack",
		stack: [
			"React",
			"TanStack",
			"NestJS",
			"PostgreSQL",
			"ClickHouse",
			"PostHog",
		],
		site: "https://www.trendtrack.io/fr",
		span: "full",
	},
	{
		name: "E-commerce AI Company",
		stack: ["Next.js 16", "FastAPI", "PostgreSQL", "Gemini", "Ollama"],
		span: "wide",
	},
	{
		name: "Lootopia",
		stack: ["Remix", "Expo", "ViroReact", "Spring Boot", "SQL Server"],
		code: "https://github.com/DjibrilNaji/lootopia",
		span: "single",
	},
	{
		name: "ÀIRNEIS",
		stack: ["Next.js", "Stripe", "AWS", "i18n"],
		code: "https://github.com/DjibrilNaji/airneis-projet-sdv-b3",
		span: "single",
	},
	{
		name: "Strategic Intelligence",
		stack: ["Hono", "Kysely", "PostgreSQL", "Next.js", "Docker"],
		code: "https://github.com/DjibrilNaji/strategic-intelligence-dashboard",
		span: "wide",
	},
];

export const testimonialAuthors = [
	"Pierre Barbon",
	"Maxime Leviel",
	"Jérémy Thebault",
	"Marvin Sabin",
	"Amin Houssni",
];

// Steps of the academic path; `topOfClass` marks the "major de promotion" badge.
export const educationSteps = [
	{ step: "01", topOfClass: false },
	{ step: "02", topOfClass: true },
	{ step: "03", topOfClass: true },
	{ step: "04", topOfClass: false },
	{ step: "05", topOfClass: false },
];
