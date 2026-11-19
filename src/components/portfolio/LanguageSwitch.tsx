import { Link } from "@tanstack/react-router";
import { langPaths, languages, useI18n } from "#/i18n";

// Links to the other language's page, keeping the section the visitor is reading.
export function LanguageSwitch({ section }: { section: string }) {
	const { lang, t } = useI18n();

	return (
		<nav
			aria-label={t.language.label}
			className="glass-strong flex h-11 shrink-0 items-center rounded-full p-1"
		>
			{languages.map((code) => {
				const current = code === lang;
				return (
					<Link
						key={code}
						to={langPaths[code]}
						hash={section === "top" ? undefined : section}
						hrefLang={code}
						lang={code}
						aria-current={current ? "page" : undefined}
						className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-bold uppercase transition ${
							current ? "bg-ink text-on-ink" : "text-body hover:text-ink"
						}`}
					>
						{code}
					</Link>
				);
			})}
		</nav>
	);
}
