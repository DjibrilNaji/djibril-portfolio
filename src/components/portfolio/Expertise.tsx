import { expertise, workingTools } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { cardPointer, Icon, Panel, SectionHeading, tones } from "./ui";

export function Expertise() {
	const { t } = useI18n();

	return (
		<Panel id="expertise">
			<SectionHeading eyebrow={t.expertise.eyebrow}>
				{t.expertise.title}
			</SectionHeading>
			<p className="-mt-4 mb-8 max-w-2xl text-base leading-relaxed text-body">
				{t.expertise.intro}
			</p>

			<div className="grid gap-4 md:grid-cols-2">
				{expertise.map((domain, i) => {
					const text = t.expertise.items[i];
					return (
						<article
							key={domain.icon}
							{...cardPointer}
							className="glass-strong spot flex flex-col gap-4 rounded-3xl p-6"
						>
							<div className="flex items-center gap-3">
								<span
									className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${tones[domain.tone]}`}
								>
									<Icon name={domain.icon} size={20} />
								</span>
								<h3 className="m-0 text-lg font-bold">{text.title}</h3>
							</div>
							<p className="m-0 text-sm leading-relaxed text-body">
								{text.description}
							</p>
							<ul className="m-0 flex list-none flex-wrap gap-2 p-0">
								{domain.tech.map((tech) => (
									<li
										key={tech}
										className="rounded-full bg-chip px-3 py-1 text-xs font-semibold text-ink ring-1 ring-line"
									>
										{tech}
									</li>
								))}
							</ul>
							<p className="m-0 mt-auto border-t border-line pt-3 text-sm text-muted">
								<span className="font-semibold text-body">
									{t.expertise.provenAt}
								</span>{" "}
								· {text.proof}
							</p>
						</article>
					);
				})}
			</div>

			<div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
				<span className="text-sm font-semibold text-body">
					{t.expertise.toolsLabel}
				</span>
				<ul className="m-0 flex list-none flex-wrap gap-2 p-0">
					{workingTools.map((tool) => (
						<li
							key={tool}
							className="rounded-full px-3 py-1 text-xs font-medium text-muted ring-1 ring-line"
						>
							{tool}
						</li>
					))}
				</ul>
			</div>
		</Panel>
	);
}
