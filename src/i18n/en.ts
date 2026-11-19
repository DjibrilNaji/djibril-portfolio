import type { Dictionary } from "./types";

export const en: Dictionary = {
	meta: {
		title: "Djibril Naji — Full Stack Developer",
		description:
			"Portfolio of Djibril Naji, full stack developer (React, TypeScript, Node.js, Java) based near Paris, eligible for the VIE program.",
	},
	nav: {
		label: "Main navigation",
		top: "Home",
		about: "About",
		services: "Services",
		projects: "Work",
		experience: "Experience",
		reviews: "Reviews",
		contact: "Contact",
		cta: "Let's talk",
	},
	theme: {
		toLight: "Switch to light theme",
		toDark: "Switch to dark theme",
	},
	language: { label: "Language" },
	hero: {
		eyebrow: "Hello, I'm",
		intro:
			"Full stack developer with nearly 4 years of experience across a startup, a major French bank and a fully remote freelance role. I ship features end to end, from React to APIs (NestJS, Spring Boot) and databases.",
		availability:
			"Eligible for the VIE program · Open to relocation anywhere in the world (USA, Canada, Spain, Portugal…)",
		ctaProjects: "View my work",
		ctaContact: "Get in touch",
		trustedBy: "Worked with",
		portraitAlt: "Portrait of Djibril Naji",
		yearsLabel: ["Years of", "experience"],
		promoTitle: "Ranked first in class",
	},
	about: {
		eyebrow: "About me",
		title: ["Remote-ready,", "shipping end to end"],
		text: "For two years I worked in English every day with engineering teams in India. For almost a year now, I've been freelancing from Asia, fully on my own. I speak French and English. Outside work I travel, play sports and spend a lot of time with generative AI (Claude, Claude Code) and my own side projects. I'm now looking for a full stack developer VIE position.",
		cta: "View my LinkedIn",
		highlights: [
			"Years of experience",
			"Years in global teams",
			"Recommendations",
		],
	},
	services: {
		eyebrow: "What I do",
		title: "Services I offer",
		items: [
			{
				title: "Front-end development",
				description:
					"React, Next.js and TanStack interfaces built from Figma designs, inside a design system, responsive from desktop to mobile.",
			},
			{
				title: "Back-end & APIs",
				description:
					"REST APIs with NestJS, Spring Boot or Django, on PostgreSQL, ClickHouse, Redis or MongoDB.",
			},
			{
				title: "Product delivery",
				description:
					"Features shipped behind feature flags, adoption tracked with PostHog, UIs localized into several languages.",
			},
			{
				title: "Quality & CI/CD",
				description:
					"Jest, Vitest, Playwright, Cypress, JUnit, SonarQube quality gates and GitHub Actions pipelines.",
			},
		],
	},
	tools: { eyebrow: "Tools & skills", title: "Technologies I use" },
	projects: {
		eyebrow: "Featured projects",
		title: "Selected work",
		cta: "All projects",
		items: [
			{
				category: "SaaS · Freelance",
				description:
					"E-commerce intelligence SaaS I work on every day, front end and back end: filter system, ad detail views, NestJS endpoints.",
			},
			{
				category: "Web · Mobile AR · API",
				description:
					"Treasure-hunt platform: web client, augmented-reality mobile app and API.",
			},
			{
				category: "SaaS",
				description:
					"Multilingual task-management SaaS with authentication and polished animations.",
			},
			{
				category: "Data · Dashboard",
				description:
					"Combines three public APIs to score countries, with charts and PDF export.",
			},
			{
				category: "Cloud",
				description:
					"Spins up disposable Azure virtual machines based on the user's role and provides RDP / SSH access.",
			},
			{
				category: "NoSQL",
				description:
					"Travel app built on three complementary NoSQL databases: document, graph and cache.",
			},
			{
				category: "E-commerce",
				description:
					"E-commerce site and back office for a furniture brand — Bachelor (B3) team project.",
			},
		],
	},
	experience: {
		eyebrow: "Career",
		title: "Experience",
		techLabel: "Technologies",
		items: [
			{
				company: "TrendTrack",
				url: "https://www.trendtrack.io/fr",
				role: "Full Stack Developer (Freelance)",
				period: "Mar 2026 — Present",
				meta: ["Freelance", "Fully remote from Asia"],
				description:
					"E-commerce intelligence SaaS: online stores, Meta, Google and TikTok ads, products and brand emails.",
				missions: [
					"Evolved V2, then building V3 across front end and back end: 280+ merged pull requests",
					"Rebuilt the shared filter system used by all 5 modules (Explorer, Shops, Ads, Products, Emails), from desktop to mobile",
					"Redesigned the detail views for Meta, Google, TikTok and Instagram ads and emails",
					"Build NestJS endpoints on PostgreSQL and ClickHouse",
					"Ship features behind feature flags and track adoption with PostHog, in a UI localized into 7 languages",
					"Implement Figma designs in the design system (dark mode, shared components) and act on QA feedback",
				],
				stack: [
					"React",
					"TypeScript",
					"TanStack",
					"NestJS",
					"PostgreSQL",
					"ClickHouse",
					"PostHog",
				],
			},
			{
				company: "Career break — Travel",
				period: "Oct 2025 — Mar 2026",
				meta: [],
				isBreak: true,
			},
			{
				company: "Société Générale",
				role: "Full Stack Developer",
				period: "Oct 2023 — Oct 2025",
				meta: ["Work-study · Hybrid", "La Défense, Paris"],
				description:
					"MyNPSC: internal application used to approve the bank's new financial products.",
				missions: [
					"Developed front-end (React, TypeScript) and back-end (Java, Spring Boot) features",
					"Resolved production incidents and improved application performance",
					"Secured releases with automated tests (Jest, Cypress, JUnit, Mockito), SonarQube quality gates and GitHub CI/CD",
					"Worked daily in English with engineering teams in India, in Scrum, and documented changes",
				],
				stack: [
					"React",
					"TypeScript",
					"Java",
					"Spring Boot",
					"PostgreSQL",
					"Cypress",
					"Jest",
					"JUnit",
					"SonarQube",
				],
			},
			{
				company: "JProject",
				role: "Full Stack Developer (startup)",
				period: "Sep 2022 — Sep 2023",
				meta: ["Work-study · Hybrid", "Cergy-Pontoise"],
				description:
					"Turnkey platform for restaurants: website, takeaway ordering and click and collect.",
				missions: [
					"Designed and built nearly the whole platform (only the admin area existed) in a team of 2 developers and 1 intern",
					"Built REST APIs in Django, documented with Swagger, and a responsive Vue.js interface from mockups",
					"Diagnosed and fixed bugs during testing",
				],
				stack: ["Vue.js", "Django", "SQL", "Docker", "Swagger"],
			},
			{
				company: "HSSAINI Saad",
				role: "Full Stack Developer",
				period: "Jan 2022 — Feb 2022",
				meta: ["Ukraine"],
				description:
					"Built REST APIs in Java and PostgreSQL and React interfaces.",
				stack: ["Java", "PostgreSQL", "React"],
			},
		],
	},
	education: {
		eyebrow: "Education",
		title: "Academic path",
		topOfClass: "Top of class",
		items: [
			{
				title: "French Baccalaureate",
				detail: "Science · Lycée Jules Ferry",
			},
			{
				title: "BTS SIO",
				detail: "2-year degree in software development · Lycée de l'Hautil",
			},
			{
				title: "Bachelor's degree",
				detail: "Ranked first in class · Sup de Vinci, Paris",
			},
			{ title: "Master 1", detail: "Full Stack Development · Sup de Vinci" },
			{
				title: "Master's degree",
				detail: "Full Stack Development · Sup de Vinci, Paris",
			},
		],
	},
	testimonials: {
		eyebrow: "Recommendations",
		title: "What they say",
		previous: "Previous recommendation",
		next: "Next recommendation",
		note: "Translated from French — originals on LinkedIn.",
		items: [
			{
				quote:
					"Every ticket assigned to him was delivered on time, with an excellent level of quality. Working with him is a real asset for the project!",
				context: "Project Management Consultant · Société Générale",
			},
			{
				quote:
					"He is now a very good full stack developer and a real asset for the team lucky enough to have him.",
				context: "Full Stack Developer & Tech Lead",
			},
			{
				quote:
					"He doesn't just code — he pays attention to business issues, the commercial side and the financial stakes.",
				context: "Product Owner · JProject",
			},
			{
				quote:
					"He really masters React, Remix and Java, and always finds effective solutions, even on the most complex parts.",
				context: "Freelance Creative Developer",
			},
			{
				quote:
					"Djibril has excellent technical expertise and knows how to explain complex concepts clearly.",
				context: "Front-end Web Developer",
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		title: ["Have a project in mind?", "Let's build it together."],
		name: "Your name",
		email: "Your email",
		project: "Your project",
		message: "Your message",
		submit: "Send message",
		projectOptions: [
			"VIE",
			"Freelance assignment",
			"Full-time role",
			"Web application",
			"Mobile application",
			"Other",
		],
	},
	footer: { tagline: "Paris & remote" },
};
