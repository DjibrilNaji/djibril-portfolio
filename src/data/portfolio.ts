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

export const projects = [
	{
		name: "TrendTrack",
		stack: "React · TanStack · NestJS · PostgreSQL · ClickHouse",
		url: "https://www.trendtrack.io/fr",
	},
	{
		name: "Lootopia",
		stack: "Remix · Expo + ViroReact · Spring Boot · SQL Server",
		url: "https://github.com/DjibrilNaji/lootopia",
	},
	{
		name: "Taskly",
		stack: "Next.js · Prisma · Better Auth · GSAP",
		url: "https://github.com/DjibrilNaji/taskly",
	},
	{
		name: "Strategic Intelligence",
		stack: "Hono · Kysely · Postgres · Next.js · Docker",
		url: "https://github.com/DjibrilNaji/strategic-intelligence-dashboard",
	},
	{
		name: "Next Azure VM",
		stack: "Next.js · Azure ARM SDK · JWT",
		url: "https://github.com/DjibrilNaji/next-azure-vm",
	},
	{
		name: "Travel Hub",
		stack: "Next.js · MongoDB · Neo4j · Redis",
		url: "https://github.com/DjibrilNaji/travel-hub",
	},
	{
		name: "ÀIRNEIS",
		stack: "Next.js · Stripe · AWS · i18n",
		url: "https://github.com/DjibrilNaji/airneis-projet-sdv-b3",
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
