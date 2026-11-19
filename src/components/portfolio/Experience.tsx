import { educationSteps } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { external, Icon, Panel, SectionHeading } from "./ui";

export function Experience() {
	const { t } = useI18n();

	return (
		<>
			<Panel id="experience">
				<SectionHeading eyebrow={t.experience.eyebrow}>
					{t.experience.title}
				</SectionHeading>
				<ol className="m-0 flex list-none flex-col gap-3 p-0">
					{t.experience.items.map((item) =>
						item.isBreak ? (
							<li
								key={item.company}
								className="flex items-center gap-3 rounded-2xl border border-dashed border-dash px-5 py-3 text-sm text-muted"
							>
								<span className="font-semibold text-body">{item.period}</span>·
								<span>{item.company}</span>
							</li>
						) : (
							<li
								key={item.company}
								className="glass-strong grid gap-5 rounded-3xl p-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8"
							>
								<div className="flex flex-col gap-2">
									<span className="flex size-11 items-center justify-center rounded-xl bg-violet-soft text-violet">
										<Icon name="briefcase" size={20} />
									</span>
									<span className="text-sm font-semibold text-violet">
										{item.period}
									</span>
									{item.meta.map((line) => (
										<span key={line} className="text-sm text-muted">
											{line}
										</span>
									))}
								</div>
								<div className="flex flex-col gap-4">
									<div className="flex flex-col gap-1">
										<h3 className="m-0 text-xl font-bold">
											{item.url ? (
												<a
													href={item.url}
													{...external}
													className="inline-flex items-center gap-1.5 hover:text-violet"
												>
													{item.company}
													<Icon name="arrowUpRight" size={16} />
												</a>
											) : (
												item.company
											)}
										</h3>
										<span className="text-sm font-medium text-body">
											{item.role}
										</span>
									</div>
									{item.description && (
										<p className="m-0 text-sm leading-relaxed text-body">
											{item.description}
										</p>
									)}
									{item.missions && (
										<ul className="m-0 grid list-none gap-x-8 gap-y-2 p-0 text-sm leading-relaxed md:grid-cols-2">
											{item.missions.map((mission) => (
												<li key={mission} className="flex gap-2.5">
													<span
														className="mt-2 size-1.5 shrink-0 rounded-full bg-violet"
														aria-hidden="true"
													/>
													<span>{mission}</span>
												</li>
											))}
										</ul>
									)}
									{item.stack && (
										<ul
											className="m-0 flex list-none flex-wrap gap-2 p-0"
											aria-label={t.experience.techLabel}
										>
											{item.stack.map((tech) => (
												<li
													key={tech}
													className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-body ring-1 ring-line"
												>
													{tech}
												</li>
											))}
										</ul>
									)}
								</div>
							</li>
						),
					)}
				</ol>
			</Panel>

			<Panel id="formation">
				<SectionHeading eyebrow={t.education.eyebrow}>
					{t.education.title}
				</SectionHeading>
				<ol className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-5">
					{educationSteps.map((item, i) => (
						<li
							key={item.step}
							className="glass-strong relative flex flex-col gap-2 rounded-2xl p-5"
						>
							<div className="flex items-center justify-between">
								<span className="flex size-9 items-center justify-center rounded-lg bg-violet-soft text-violet">
									<Icon name="graduation" size={18} />
								</span>
								<span
									className={`text-2xl font-light ${i === educationSteps.length - 1 ? "text-violet" : "text-faint"}`}
								>
									{item.step}
								</span>
							</div>
							<h3 className="m-0 text-base font-bold">
								{t.education.items[i].title}
							</h3>
							<p className="m-0 text-sm leading-relaxed text-muted">
								{t.education.items[i].detail}
							</p>
							{item.topOfClass && (
								<span className="self-start rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-on-ink">
									{t.education.topOfClass}
								</span>
							)}
						</li>
					))}
				</ol>
			</Panel>
		</>
	);
}
