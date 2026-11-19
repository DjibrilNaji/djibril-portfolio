import { useEffect, useState } from "react";
import { useI18n } from "#/i18n";
import { Icon } from "./ui";

type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before first paint so the page never flashes the wrong theme.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.toggle("dark",t==="dark")}catch(e){}})();`;

function applyTheme(theme: Theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
	const { t } = useI18n();
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		setTheme(
			document.documentElement.classList.contains("dark") ? "dark" : "light",
		);

		// Follow the OS setting until the visitor picks a theme explicitly.
		const media = matchMedia("(prefers-color-scheme: dark)");
		const onChange = (event: MediaQueryListEvent) => {
			try {
				if (localStorage.getItem(THEME_STORAGE_KEY)) return;
			} catch {}
			const next = event.matches ? "dark" : "light";
			applyTheme(next);
			setTheme(next);
		};
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, []);

	const toggle = () => {
		const next = theme === "dark" ? "light" : "dark";
		applyTheme(next);
		setTheme(next);
		try {
			localStorage.setItem(THEME_STORAGE_KEY, next);
		} catch {}
	};

	const isDark = theme === "dark";

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label={isDark ? t.theme.toLight : t.theme.toDark}
			aria-pressed={isDark}
			className="glass-strong inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink transition hover:bg-hover-surface"
		>
			<Icon name={isDark ? "sun" : "moon"} />
		</button>
	);
}
