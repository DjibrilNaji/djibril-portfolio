import { highlights, profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Eyebrow, external, Icon, Panel, pillGlass } from "./ui";

export function About() {
	const { t } = useI18n();

	return (
		<Panel id="a-propos">
			<div className="grid items-center gap-10 lg:grid-cols-2">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col gap-2">
						<Eyebrow>{t.about.eyebrow}</Eyebrow>
						<h2 className="m-0 text-2xl leading-snug font-bold tracking-tight md:text-[28px]">
							{t.about.title[0]}
							<br />
							{t.about.title[1]}
						</h2>
					</div>
					<dl className="glass-strong m-0 grid grid-cols-3 divide-x divide-line rounded-2xl py-5">
						{highlights.map((item, i) => (
							<div
								key={item.value + t.about.highlights[i]}
								className="flex min-w-0 flex-col items-center gap-1 px-2 text-center"
							>
								<dt className="order-last text-sm leading-snug text-muted">
									{t.about.highlights[i]}
								</dt>
								<dd className="text-gradient m-0 text-3xl font-extrabold tracking-tight">
									{item.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
				<div className="flex flex-col items-start gap-6">
					<p className="m-0 text-base leading-relaxed text-body">
						{t.about.text}
					</p>
					<a href={profile.linkedin} {...external} className={pillGlass}>
						{t.about.cta} <Icon name="arrowUpRight" size={16} />
					</a>
				</div>
			</div>
		</Panel>
	);
}
