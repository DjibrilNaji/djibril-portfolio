import { services, tools } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Icon, Panel, SectionHeading, tones } from "./ui";

export function Services() {
	const { t } = useI18n();

	return (
		<>
			<Panel id="services">
				<SectionHeading eyebrow={t.services.eyebrow}>
					{t.services.title}
				</SectionHeading>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((service, i) => (
						<article
							key={service.icon}
							className="glass-strong flex flex-col gap-4 rounded-3xl p-6"
						>
							<span
								className={`flex size-11 items-center justify-center rounded-xl ${tones[service.tone]}`}
							>
								<Icon name={service.icon} size={20} />
							</span>
							<h3 className="m-0 text-base font-bold">
								{t.services.items[i].title}
							</h3>
							<p className="m-0 text-sm leading-relaxed text-body">
								{t.services.items[i].description}
							</p>
						</article>
					))}
				</div>
			</Panel>

			<Panel id="stack">
				<SectionHeading eyebrow={t.tools.eyebrow}>
					{t.tools.title}
				</SectionHeading>
				<ul className="m-0 grid list-none grid-cols-4 gap-3 p-0 sm:grid-cols-6 lg:grid-cols-9">
					{tools.map((tool) => (
						<li
							key={tool.slug}
							className="glass-strong flex flex-col items-center gap-2 rounded-2xl px-2 py-4"
						>
							<img
								src={`https://cdn.simpleicons.org/${tool.slug}`}
								alt=""
								width={28}
								height={28}
								loading="lazy"
								className={`size-7 ${"monochrome" in tool ? "dark:invert" : ""}`}
							/>
							<span className="text-center text-xs font-semibold text-body">
								{tool.name}
							</span>
						</li>
					))}
				</ul>
			</Panel>
		</>
	);
}
