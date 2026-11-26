import { useEffect, useState } from "react";
import { profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { CommandPalette } from "./CommandPalette";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { Icon, pillGlass } from "./ui";

export const sections = [
	{ id: "top", key: "top" },
	{ id: "a-propos", key: "about" },
	{ id: "expertise", key: "expertise" },
	{ id: "projets", key: "projects" },
	{ id: "experience", key: "experience" },
	{ id: "avis", key: "reviews" },
	{ id: "contact", key: "contact" },
] as const;

export function Header() {
	const { t } = useI18n();
	const [active, setActive] = useState("top");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) setActive(entry.target.id);
				}
			},
			{ rootMargin: "-45% 0px -50% 0px" },
		);
		for (const section of sections) {
			const el = document.getElementById(section.id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!menuOpen) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [menuOpen]);

	const close = () => setMenuOpen(false);

	return (
		<header className="sticky top-3 z-50 mx-auto w-full max-w-[1200px] px-4 md:px-6">
			{/* Dims the page and closes the menu on outside tap */}
			{menuOpen && (
				<button
					type="button"
					tabIndex={-1}
					aria-label={t.nav.closeMenu}
					onClick={close}
					className="fixed inset-0 cursor-default bg-black/30 lg:hidden"
				/>
			)}
			<div className="glass-nav relative rounded-[22px]">
				{/* Reading progress, clipped to the bar's rounded corners */}
				<span
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 overflow-hidden rounded-[22px]"
				>
					<span className="scroll-progress absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-violet via-[#8b5cf6] to-sky-ink" />
				</span>
				<div className="flex items-center justify-between gap-3 py-2.5 pr-2.5 pl-3 lg:gap-6">
					<a href="#top" className="flex min-h-11 shrink-0 items-center gap-3">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-extrabold text-on-ink">
							DN
						</span>
						<span className="hidden flex-col leading-tight sm:flex lg:hidden xl:flex">
							<span className="text-sm font-bold whitespace-nowrap">
								{profile.firstName} {profile.lastName}
							</span>
							<span className="text-xs text-muted">{profile.title}</span>
						</span>
					</a>
					<nav aria-label={t.nav.label} className="hidden lg:block">
						<ul className="m-0 flex list-none items-center gap-1 p-0">
							{sections.map((section) => (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										aria-current={active === section.id ? "true" : undefined}
										className={`inline-flex min-h-9 items-center rounded-full px-3 text-[13px] font-medium whitespace-nowrap transition xl:px-3.5 ${
											active === section.id
												? "glass-strong text-ink"
												: "text-body hover:text-ink"
										}`}
									>
										{t.nav[section.key]}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
						<CommandPalette />
						<LanguageSwitch section={active} />
						<ThemeToggle />
						<div className="hidden lg:block">
							<a href="#contact" className={`${pillGlass} whitespace-nowrap`}>
								{t.nav.cta} <Icon name="arrowUpRight" size={16} />
							</a>
						</div>
						<button
							type="button"
							onClick={() => setMenuOpen((open) => !open)}
							aria-expanded={menuOpen}
							aria-controls="mobile-menu"
							aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
							className="glass-strong inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink lg:hidden"
						>
							<Icon name={menuOpen ? "close" : "menu"} size={20} />
						</button>
					</div>
				</div>

				{menuOpen && (
					<nav
						id="mobile-menu"
						aria-label={t.nav.label}
						className="absolute inset-x-0 top-full mt-2 rounded-[22px] border border-line bg-ground p-2 shadow-2xl lg:hidden"
					>
						<ul className="m-0 flex list-none flex-col gap-1 p-0">
							{sections.map((section) => (
								<li key={section.id}>
									<a
										href={`#${section.id}`}
										onClick={close}
										aria-current={active === section.id ? "true" : undefined}
										className={`flex min-h-11 items-center rounded-xl px-4 text-base font-medium ${
											active === section.id
												? "glass-strong text-ink"
												: "text-body"
										}`}
									>
										{t.nav[section.key]}
									</a>
								</li>
							))}
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
}
