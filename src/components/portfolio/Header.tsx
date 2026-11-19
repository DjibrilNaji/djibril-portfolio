import { useEffect, useState } from "react";
import { profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { Icon, pillGlass } from "./ui";

const sections = [
	{ id: "top", key: "top" },
	{ id: "a-propos", key: "about" },
	{ id: "services", key: "services" },
	{ id: "projets", key: "projects" },
	{ id: "experience", key: "experience" },
	{ id: "avis", key: "reviews" },
	{ id: "contact", key: "contact" },
] as const;

export function Header() {
	const { t } = useI18n();
	const [active, setActive] = useState("top");

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

	return (
		<header className="sticky top-3 z-20 mx-auto w-full max-w-[1200px] px-4 md:px-6">
			<div className="glass flex items-center justify-between gap-3 rounded-[22px] lg:gap-6 py-2.5 pr-2.5 pl-3">
				<a href="#top" className="flex min-h-11 min-w-0 items-center gap-3">
					<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink text-sm font-extrabold text-on-ink">
						DN
					</span>
					<span className="hidden flex-col leading-tight min-[420px]:flex lg:hidden xl:flex">
						<span className="text-sm font-bold whitespace-nowrap">
							{profile.firstName} {profile.lastName}
						</span>
						<span className="hidden text-xs text-muted sm:block lg:hidden xl:block">
							{profile.title}
						</span>
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
				<div className="flex items-center gap-3 lg:gap-4">
					<LanguageSwitch section={active} />
					<ThemeToggle />
					<a
						href="#contact"
						className={`${pillGlass} hidden whitespace-nowrap sm:inline-flex`}
					>
						{t.nav.cta} <Icon name="arrowUpRight" size={16} />
					</a>
				</div>
			</div>
		</header>
	);
}
