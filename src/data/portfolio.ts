// Language-neutral data. Every translated string lives in src/i18n/{fr,en}.ts,
// in lists that line up by index with the ones below.

export const siteUrl = "https://djibril-portfolio-nine.vercel.app";

export const profile = {
	firstName: "Djibril",
	lastName: "Naji",
	title: "Full Stack Developer",
	location: "Paris, France",
	email: "najidjibril@gmail.com",
	linkedin: "https://www.linkedin.com/in/djibrilnaji",
	github: "https://github.com/DjibrilNaji",
	// JPEG kept for social cards; the page itself loads the WebP variants.
	photo: "/djibril.jpg",
	photoSrcSet: "/djibril-480.webp 480w, /djibril-720.webp 720w",
	photoSizes: "(min-width: 1024px) 380px, (min-width: 640px) 420px, 90vw",
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

// Language-neutral part of the "Expertise" section; titles, text and proof are in i18n.
export const expertise = [
	{
		icon: "layout",
		tone: "peach",
		tech: [
			"React",
			"Next.js",
			"TypeScript",
			"TanStack",
			"Tailwind CSS",
			"Vue.js",
		],
	},
	{
		icon: "server",
		tone: "lilac",
		tech: ["Node.js", "NestJS", "Java", "Spring Boot", "Django", "REST"],
	},
	{
		icon: "database",
		tone: "sky",
		tech: ["PostgreSQL", "ClickHouse", "Redis", "MongoDB", "SQL Server"],
	},
	{
		icon: "shield",
		tone: "mint",
		tech: [
			"Jest",
			"Vitest",
			"Playwright",
			"Cypress",
			"JUnit",
			"SonarQube",
			"GitHub Actions",
			"Docker",
		],
	},
] as const;

export const workingTools = [
	"Scrum",
	"Code review",
	"CI/CD",
	"Feature flags",
	"PostHog",
	"Figma",
	"Linear",
	"Jira",
	"Claude Code",
];

// `layers` draws the architecture strip on each card, front to back.
// `featured` = full-width card; the others share a 2-column grid so neighbours have equal width and height.
export type Project = {
	name: string;
	layers: string[];
	code?: string;
	site?: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		name: "TrendTrack",
		layers: ["React · TanStack", "NestJS", "PostgreSQL · ClickHouse"],
		site: "https://www.trendtrack.io/fr",
		featured: true,
	},
	{
		name: "E-commerce AI Company",
		layers: ["Next.js 16", "FastAPI · worker", "PostgreSQL", "Gemini → Ollama"],
	},
	{
		name: "Lootopia",
		layers: ["Remix · Expo AR", "Spring Boot", "SQL Server"],
		code: "https://github.com/DjibrilNaji/lootopia",
	},
	{
		name: "ÀIRNEIS",
		layers: ["Next.js", "Objection · Stripe", "PostgreSQL"],
		code: "https://github.com/DjibrilNaji/airneis-projet-sdv-b3",
	},
	{
		name: "Strategic Intelligence",
		layers: ["Next.js · Recharts", "Hono · Kysely", "PostgreSQL"],
		code: "https://github.com/DjibrilNaji/strategic-intelligence-dashboard",
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
