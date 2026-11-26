import { profile, trustedBy } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { LiquidOrb } from "./LiquidOrb";
import { Eyebrow, external, Icon, pillDark, pillGlass } from "./ui";

export function Hero() {
	const { t } = useI18n();

	return (
		<section
			id="top"
			className="glass relative scroll-mt-28 overflow-hidden rounded-[var(--radius-panel)] px-6 pt-10 pb-8 md:px-12 md:pt-16"
		>
			<div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)]">
				<div className="rise flex flex-col gap-6">
					<Eyebrow>{t.hero.eyebrow}</Eyebrow>
					<div className="flex flex-col gap-2">
						<h1
							aria-label={`${profile.firstName} ${profile.lastName}`}
							className="m-0 text-5xl font-extrabold tracking-tight md:text-[64px] md:leading-[1.05]"
						>
							<SplitLetters text={`${profile.firstName} ${profile.lastName}`} />
						</h1>
						<p className="text-gradient text-gradient-live m-0 text-3xl font-bold tracking-tight md:text-[34px] lg:text-[30px] xl:text-[38px]">
							{profile.title}
						</p>
					</div>
					<p className="m-0 max-w-[520px] text-base leading-relaxed text-body md:text-lg">
						{t.hero.intro}
					</p>
					<p className="m-0 inline-flex max-w-[560px] items-start gap-2 self-start rounded-2xl bg-violet-soft px-4 py-2.5 text-sm font-semibold text-violet">
						<Icon name="mapPin" size={16} className="mt-0.5 shrink-0" />
						{t.hero.availability}
					</p>
					<div className="flex flex-wrap gap-3">
						<a href="#projets" className={pillDark}>
							{t.hero.ctaProjects} <Icon name="arrowUpRight" size={16} />
						</a>
						<a href="#contact" className={pillGlass}>
							{t.hero.ctaContact} <Icon name="mail" size={16} />
						</a>
					</div>
					<div className="mt-6 flex flex-col gap-3">
						<span className="text-sm font-medium text-muted">
							{t.hero.trustedBy}
						</span>
						<ul className="m-0 flex list-none flex-wrap items-center gap-x-8 gap-y-2 p-0">
							{trustedBy.map((company) => {
								const content = (
									<>
										{company.logo ? (
											<img
												src={company.logo}
												alt=""
												width={28}
												height={28}
												loading="lazy"
												className="size-7 rounded-md"
											/>
										) : (
											<span className="flex size-7 items-center justify-center rounded-md bg-violet-soft text-xs font-extrabold text-violet">
												{company.name[0]}
											</span>
										)}
										{company.name}
									</>
								);
								return (
									<li
										key={company.name}
										className="text-lg font-bold tracking-tight text-faint"
									>
										{company.url ? (
											<a
												href={company.url}
												{...external}
												className="flex items-center gap-2.5 transition hover:text-ink"
											>
												{content}
											</a>
										) : (
											<span className="flex items-center gap-2.5">
												{content}
											</span>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				<Portrait />
			</div>
		</section>
	);
}

// Each letter animates on its own; screen readers get the h1's aria-label instead.
function SplitLetters({ text }: { text: string }) {
	return (
		<span aria-hidden="true">
			{[...text].map((char, i) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: static text, letters repeat
					key={i}
					className="letter"
					style={{ "--i": i } as React.CSSProperties}
				>
					{char === " " ? "\u00a0" : char}
				</span>
			))}
		</span>
	);
}

function Portrait() {
	const { t } = useI18n();

	return (
		<div
			className="rise relative mx-auto w-full max-w-[440px] pt-6 pr-6 pb-10 pl-2 sm:pl-8"
			style={{ animationDelay: "120ms" }}
		>
			<div
				aria-hidden="true"
				className="orb-fallback pointer-events-none absolute inset-[4%] rounded-full"
			/>
			<div className="glass-strong relative aspect-[4/4.4] overflow-hidden rounded-[48px] p-2">
				<div className="h-full w-full overflow-hidden rounded-[40px] bg-gradient-to-br from-[#e9e4ff] via-[#f4f2fb] to-[#dfe6ff] dark:from-[#241c4a] dark:via-[#15142a] dark:to-[#1a2250]">
					<img
						src="/djibril-720.webp"
						srcSet={profile.photoSrcSet}
						sizes={profile.photoSizes}
						alt={t.hero.portraitAlt}
						width={720}
						height={720}
						fetchPriority="high"
						decoding="async"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>

			<LiquidOrb />

			<div className="glass-float absolute top-0 right-0 flex flex-col items-center rounded-2xl px-5 py-4 text-center">
				<span className="text-4xl font-extrabold tracking-tight">~4</span>
				<span className="text-sm leading-tight font-medium text-body">
					{t.hero.yearsLabel[0]}
					<br />
					{t.hero.yearsLabel[1]}
				</span>
			</div>

			<div className="glass-float absolute right-2 bottom-0 flex items-center gap-3 rounded-2xl px-4 py-3">
				<span className="flex size-10 items-center justify-center rounded-xl bg-violet-soft text-violet">
					<Icon name="graduation" size={20} />
				</span>
				<span className="text-base font-bold">{t.hero.promoTitle}</span>
			</div>
		</div>
	);
}
