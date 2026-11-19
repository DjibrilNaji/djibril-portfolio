import { dictionaries, I18nProvider, type Lang, langPaths } from "#/i18n";
import { About } from "./About";
import { Contact, Footer } from "./Contact";
import { Experience } from "./Experience";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { container } from "./ui";

export function PortfolioPage({ lang }: { lang: Lang }) {
	return (
		<I18nProvider lang={lang}>
			<div className="pb-4">
				<Header />
				<main className={`${container} mt-8 flex flex-col gap-4 md:mt-10`}>
					<Hero />
					<About />
					<Services />
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

// <head> tags for one language: title, description and hreflang alternates.
export function portfolioHead(lang: Lang) {
	const { meta } = dictionaries[lang];
	return {
		meta: [
			{ title: meta.title },
			{ name: "description", content: meta.description },
			{ property: "og:title", content: meta.title },
			{ property: "og:description", content: meta.description },
			{ property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
		],
		links: [
			{ rel: "alternate", hrefLang: "fr", href: langPaths.fr },
			{ rel: "alternate", hrefLang: "en", href: langPaths.en },
			{ rel: "alternate", hrefLang: "x-default", href: langPaths.fr },
		],
	};
}
