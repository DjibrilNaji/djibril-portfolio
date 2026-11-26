export const languages = ["fr", "en"] as const;
export type Lang = (typeof languages)[number];

export type ExperienceText = {
	company: string;
	role?: string;
	period: string;
	meta: string[];
	description?: string;
	missions?: string[];
	stack?: string[];
	isBreak?: boolean;
	url?: string;
};

// Every visible string of the site. Lists line up by index with the
// language-neutral data in src/data/portfolio.ts (icons, links, stacks…).
export type Dictionary = {
	meta: { title: string; description: string };
	skipLink: string;
	nav: {
		label: string;
		top: string;
		about: string;
		expertise: string;
		projects: string;
		experience: string;
		reviews: string;
		contact: string;
		cta: string;
		openMenu: string;
		closeMenu: string;
	};
	theme: { toLight: string; toDark: string };
	language: { label: string };
	palette: {
		open: string;
		placeholder: string;
		goTo: string;
		theme: string;
		language: string;
		copyEmail: string;
		empty: string;
		hint: string;
	};
	marquee: string;
	hero: {
		eyebrow: string;
		intro: string;
		availability: string;
		ctaProjects: string;
		ctaContact: string;
		trustedBy: string;
		portraitAlt: string;
		yearsLabel: [string, string];
		promoTitle: string;
	};
	about: {
		eyebrow: string;
		title: [string, string];
		text: string;
		cta: string;
		facts: { label: string; value: string }[];
	};
	expertise: {
		eyebrow: string;
		title: string;
		intro: string;
		provenAt: string;
		toolsLabel: string;
		items: { title: string; description: string; proof: string }[];
	};
	projects: {
		eyebrow: string;
		title: string;
		cta: string;
		code: string;
		site: string;
		privateNote: string;
		architecture: string;
		items: {
			category: string;
			description: string;
			highlights: string[];
			/** Replaces privateNote on cards without links. */
			note?: string;
		}[];
	};
	experience: {
		eyebrow: string;
		title: string;
		techLabel: string;
		items: ExperienceText[];
	};
	education: {
		eyebrow: string;
		title: string;
		topOfClass: string;
		items: { title: string; detail: string }[];
	};
	testimonials: {
		eyebrow: string;
		title: string;
		previous: string;
		next: string;
		note?: string;
		items: { quote: string; context: string }[];
	};
	contact: {
		eyebrow: string;
		title: [string, string];
		name: string;
		email: string;
		project: string;
		message: string;
		submit: string;
		sending: string;
		sent: string;
		error: string;
		copy: string;
		copied: string;
		projectOptions: string[];
	};
	footer: { tagline: string };
};
