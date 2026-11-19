import { createContext, type ReactNode, useContext } from "react";
import { en } from "./en";
import { fr } from "./fr";
import type { Dictionary, Lang } from "./types";

export { type Dictionary, type Lang, languages } from "./types";

export const dictionaries: Record<Lang, Dictionary> = { fr, en };

// French lives at "/", English at "/en".
export const langPaths: Record<Lang, "/" | "/en"> = { fr: "/", en: "/en" };

export function langFromPath(pathname: string): Lang {
	return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

const I18nContext = createContext<{ lang: Lang; t: Dictionary }>({
	lang: "fr",
	t: fr,
});

export function I18nProvider({
	lang,
	children,
}: {
	lang: Lang;
	children: ReactNode;
}) {
	return (
		<I18nContext.Provider value={{ lang, t: dictionaries[lang] }}>
			{children}
		</I18nContext.Provider>
	);
}

export function useI18n() {
	return useContext(I18nContext);
}
