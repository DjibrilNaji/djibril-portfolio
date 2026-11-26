import { profile, siteUrl } from "#/data/portfolio";
import { dictionaries, I18nProvider, type Lang, langPaths } from "#/i18n";
import { About } from "./About";
import { CursorGlow, StackMarquee } from "./Ambient";
import { Contact, Footer } from "./Contact";
import { Experience } from "./Experience";
import { Expertise } from "./Expertise";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Testimonials } from "./Testimonials";
import { container } from "./ui";

export function PortfolioPage({ lang }: { lang: Lang }) {
	const t = dictionaries[lang];

	return (
		<I18nProvider lang={lang}>
			<a
				href="#main"
				className="sr-only z-[60] rounded-full bg-ink px-5 py-3 text-sm font-semibold text-on-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
			>
				{t.skipLink}
			</a>
			<CursorGlow />
			<div className="pb-4">
				<Header />
				<main
					id="main"
					tabIndex={-1}
					className={`${container} mt-8 flex flex-col gap-4 outline-none md:mt-10`}
				>
					<Hero />
					<StackMarquee />
					<About />
					<Expertise />
					<Projects />
					<Experience />
					<Testimonials />
					<Contact />
				</main>
				<div className={container}>
					<Footer />
				</div>
			</div>
		</I18nProvider>
	);
}

const absolute = (path: string) => `${siteUrl}${path === "/" ? "/" : path}`;

// <head> tags for one language: SEO, social cards, hreflang and structured data.
export function portfolioHead(lang: Lang) {
	const { meta } = dictionaries[lang];
	const url = absolute(langPaths[lang]);
	const image = `${siteUrl}${profile.photo}`;

	const person = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: `${profile.firstName} ${profile.lastName}`,
		jobTitle: profile.title,
		url,
		image,
		email: `mailto:${profile.email}`,
		address: {
			"@type": "PostalAddress",
			addressLocality: "Paris",
			addressCountry: "FR",
		},
		alumniOf: { "@type": "CollegeOrUniversity", name: "Sup de Vinci" },
		knowsLanguage: ["fr", "en"],
		sameAs: [profile.linkedin, profile.github],
	};

	return {
		meta: [
			{ title: meta.title },
			{ name: "description", content: meta.description },
			{ property: "og:type", content: "profile" },
			{ property: "og:url", content: url },
			{ property: "og:title", content: meta.title },
			{ property: "og:description", content: meta.description },
			{ property: "og:image", content: image },
			{ property: "og:image:alt", content: meta.title },
			{ property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: meta.title },
			{ name: "twitter:description", content: meta.description },
			{ name: "twitter:image", content: image },
		],
		links: [
			{ rel: "canonical", href: url },
			{ rel: "alternate", hrefLang: "fr", href: absolute(langPaths.fr) },
			{ rel: "alternate", hrefLang: "en", href: absolute(langPaths.en) },
			{ rel: "alternate", hrefLang: "x-default", href: absolute(langPaths.fr) },
			{
				rel: "preload",
				as: "image",
				href: "/djibril-720.webp",
				imageSrcSet: profile.photoSrcSet,
				imageSizes: profile.photoSizes,
				fetchPriority: "high" as const,
			},
		],
		scripts: [
			{ type: "application/ld+json", children: JSON.stringify(person) },
		],
	};
}
