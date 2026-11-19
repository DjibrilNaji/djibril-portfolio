import { profile, projects } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Icon, Panel, pillGlass, RoundArrow, SectionHeading } from "./ui";

const visuals = [
	"from-[#e6ddff] to-[#f5f2ff] dark:from-[#2a1f5c] dark:to-[#15142a]",
	"from-[#dde6ff] to-[#f3f5ff] dark:from-[#1b2757] dark:to-[#14152a]",
	"from-[#e3f3fb] to-[#f4f7ff] dark:from-[#123345] dark:to-[#14152a]",
	"from-[#ece6ff] to-[#e0e8ff] dark:from-[#271d52] dark:to-[#18234d]",
	"from-[#dff5f1] to-[#eef1ff] dark:from-[#0f3a36] dark:to-[#161a33]",
	"from-[#fde9d6] to-[#f3efff] dark:from-[#3d2414] dark:to-[#1d1733]",
];

export function Projects() {
	const { t } = useI18n();

	return (
		<Panel id="projets">
			<SectionHeading
				eyebrow={t.projects.eyebrow}
				action={
					<a href={`${profile.github}?tab=repositories`} className={pillGlass}>
						{t.projects.cta} <Icon name="arrowUpRight" size={16} />
					</a>
				}
			>
				{t.projects.title}
			</SectionHeading>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, i) => (
					<a
						key={project.name}
						href={project.url}
						className={`group glass-strong flex flex-col overflow-hidden rounded-3xl p-2 transition hover:-translate-y-0.5 ${i === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
					>
						<div
							className={`relative flex h-44 flex-col overflow-hidden rounded-[18px] bg-gradient-to-br ${visuals[i % visuals.length]} p-4`}
							aria-hidden="true"
						>
							<div className="glass-strong flex flex-1 translate-y-4 flex-col gap-2 rounded-t-xl p-3 transition group-hover:translate-y-2">
								<div className="flex gap-1.5">
									<span className="size-2 rounded-full bg-dot" />
									<span className="size-2 rounded-full bg-dot" />
									<span className="size-2 rounded-full bg-dot" />
								</div>
								<span className="text-gradient text-2xl font-extrabold tracking-tight">
									{project.name}
								</span>
								<span className="text-xs font-medium text-body">
									{project.stack}
								</span>
							</div>
						</div>
						<div className="flex items-start justify-between gap-3 px-3 pt-4 pb-3">
							<div className="flex flex-col gap-1">
								<h3 className="m-0 text-base font-bold">{project.name}</h3>
								<span className="text-sm font-medium text-muted">
									{t.projects.items[i].category}
								</span>
								<p className="m-0 mt-1 text-sm leading-relaxed text-body">
									{t.projects.items[i].description}
								</p>
							</div>
							<RoundArrow />
						</div>
					</a>
				))}
			</div>
		</Panel>
	);
}
