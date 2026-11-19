import { profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Eyebrow, external, Icon, Panel, pillGlass } from "./ui";

export function About() {
	const { t } = useI18n();

	return (
		<Panel id="a-propos">
			<div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<Eyebrow>{t.about.eyebrow}</Eyebrow>
						<h2 className="m-0 text-2xl leading-snug font-bold tracking-tight md:text-[28px]">
							{t.about.title[0]}
							<br />
							{t.about.title[1]}
						</h2>
					</div>
					<p className="m-0 text-base leading-relaxed text-body">
						{t.about.text}
					</p>
					<a
						href={profile.linkedin}
						{...external}
						className={`${pillGlass} self-start`}
					>
						{t.about.cta} <Icon name="arrowUpRight" size={16} />
					</a>
				</div>
				<dl className="glass-strong m-0 flex flex-col self-start rounded-3xl px-6 py-2">
					{t.about.facts.map((fact) => (
						<div
							key={fact.label}
							className="flex flex-col gap-0.5 border-b border-line py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
						>
							<dt className="text-sm text-muted">{fact.label}</dt>
							<dd className="m-0 text-base font-semibold sm:text-right">
								{fact.value}
							</dd>
						</div>
					))}
				</dl>
			</div>
		</Panel>
	);
}
