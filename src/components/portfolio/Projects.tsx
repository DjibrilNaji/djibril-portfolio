import { profile, projects } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { external, Icon, Panel, pillGlass, SectionHeading } from "./ui";

// One flat tint per card header, cycling; the text colours keep 4.5:1 on each.
const tints = ["bg-lilac", "bg-mint", "bg-sky", "bg-peach", "bg-violet-soft"];

const actionLink =
	"inline-flex min-h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition";

export function Projects() {
	const { t } = useI18n();

	return (
		<Panel id="projets">
			<SectionHeading
				eyebrow={t.projects.eyebrow}
				action={
					<a
						href={`${profile.github}?tab=repositories`}
						{...external}
						className={pillGlass}
					>
						{t.projects.cta} <Icon name="arrowUpRight" size={16} />
					</a>
				}
			>
				{t.projects.title}
			</SectionHeading>
			<div className="grid gap-4 md:grid-cols-2">
				{projects.map((project, i) => {
					const text = t.projects.items[i];
					return (
						<article
							key={project.name}
							className={`glass-strong group flex flex-col overflow-hidden rounded-3xl p-2 transition duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glass-strong-shadow)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${project.featured ? "md:col-span-2" : ""}`}
						>
							<div
								className={`flex flex-col gap-3 rounded-[18px] px-5 py-4 ${tints[i % tints.length]}`}
							>
								<span className="text-xs font-semibold tracking-[0.08em] text-body uppercase">
									{t.projects.architecture}
								</span>
								<ol className="m-0 flex list-none flex-wrap items-center gap-x-1.5 gap-y-2 p-0">
									{project.layers.map((layer, j) => (
										<li key={layer} className="flex items-center gap-1.5">
											{j > 0 && (
												<Icon
													name="chevronRight"
													size={14}
													className="shrink-0 text-muted"
												/>
											)}
											<span className="rounded-lg bg-white/80 px-2.5 py-1 text-xs font-semibold text-[#0f1222] shadow-sm dark:bg-black/30 dark:text-ink">
												{layer}
											</span>
										</li>
									))}
								</ol>
							</div>
							<div className="flex flex-1 flex-col gap-4 px-4 pt-5 pb-4">
								<div className="flex flex-col gap-1">
									<h3 className="m-0 text-xl font-bold tracking-tight">
										{project.name}
									</h3>
									<span className="text-sm font-semibold text-violet">
										{text.category}
									</span>
								</div>
								<p className="m-0 text-sm leading-relaxed text-body">
									{text.description}
								</p>
								<ul
									className={`m-0 grid list-none gap-2 p-0 text-sm leading-relaxed ${project.featured ? "lg:grid-cols-3 lg:gap-6" : ""}`}
								>
									{text.highlights.map((highlight) => (
										<li key={highlight} className="flex gap-2.5">
											<Icon
												name="check"
												size={16}
												className="mt-0.5 shrink-0 text-violet"
											/>
											<span>{highlight}</span>
										</li>
									))}
								</ul>
								<div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
									{project.site && (
										<a
											href={project.site}
											{...external}
											className={`${actionLink} bg-ink text-on-ink hover:bg-ink-hover`}
										>
											{t.projects.site} <Icon name="arrowUpRight" size={15} />
										</a>
									)}
									{project.code && (
										<a
											href={project.code}
											{...external}
											className={`${actionLink} glass-strong text-ink hover:bg-hover-surface`}
										>
											<Icon name="github" size={16} /> {t.projects.code}
										</a>
									)}
									{!project.site && !project.code && (
										<span className="inline-flex min-h-10 items-center text-sm font-medium text-muted">
											{text.note ?? t.projects.privateNote}
										</span>
									)}
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</Panel>
	);
}
