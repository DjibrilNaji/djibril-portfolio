import { type Project, profile, projects } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { external, Icon, Panel, pillGlass, SectionHeading } from "./ui";

const visuals = [
	"from-[#e6ddff] to-[#f5f2ff] dark:from-[#2a1f5c] dark:to-[#15142a]",
	"from-[#dff5f1] to-[#eef1ff] dark:from-[#0f3a36] dark:to-[#161a33]",
	"from-[#dde6ff] to-[#f3f5ff] dark:from-[#1b2757] dark:to-[#14152a]",
	"from-[#fde9d6] to-[#f3efff] dark:from-[#3d2414] dark:to-[#1d1733]",
	"from-[#e3f3fb] to-[#f4f7ff] dark:from-[#123345] dark:to-[#14152a]",
];

const spans: Record<Project["span"], string> = {
	full: "md:col-span-2 lg:col-span-3",
	wide: "md:col-span-2",
	single: "",
};

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
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, i) => {
					const text = t.projects.items[i];
					return (
						<article
							key={project.name}
							className={`glass-strong flex flex-col overflow-hidden rounded-3xl p-2 ${spans[project.span]}`}
						>
							<div
								className={`relative flex h-36 flex-col justify-end overflow-hidden rounded-[18px] bg-gradient-to-br p-5 ${visuals[i % visuals.length]}`}
								aria-hidden="true"
							>
								<span className="text-gradient text-3xl font-extrabold tracking-tight">
									{project.name}
								</span>
							</div>
							<div className="flex flex-1 flex-col gap-4 px-4 pt-5 pb-4">
								<div className="flex flex-col gap-1">
									<h3 className="m-0 text-lg font-bold">{project.name}</h3>
									<span className="text-sm font-semibold text-violet">
										{text.category}
									</span>
								</div>
								<p className="m-0 flex-1 text-sm leading-relaxed text-body">
									{text.description}
								</p>
								<ul
									className="m-0 flex list-none flex-wrap gap-2 p-0"
									aria-label="Stack"
								>
									{project.stack.map((tech) => (
										<li
											key={tech}
											className="rounded-full bg-chip px-3 py-1 text-xs font-medium text-body ring-1 ring-line"
										>
											{tech}
										</li>
									))}
								</ul>
								<div className="flex flex-wrap items-center gap-2 pt-1">
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
											{t.projects.privateNote}
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
