import { useState } from "react";
import { testimonialAuthors } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Icon, Panel, SectionHeading } from "./ui";

const PER_PAGE = 3;

function initials(name: string) {
	return name
		.split(" ")
		.map((part) => part[0])
		.join("")
		.slice(0, 2);
}

export function Testimonials() {
	const { t } = useI18n();
	const [start, setStart] = useState(0);
	const testimonials = testimonialAuthors.map((author, i) => ({
		author,
		...t.testimonials.items[i],
	}));
	const visible = Array.from(
		{ length: PER_PAGE },
		(_, i) => testimonials[(start + i) % testimonials.length],
	);
	const move = (delta: number) =>
		setStart((s) => (s + delta + testimonials.length) % testimonials.length);

	const navButton =
		"glass-strong inline-flex size-11 items-center justify-center rounded-full text-ink transition hover:bg-hover-surface";

	return (
		<Panel id="avis">
			<SectionHeading
				eyebrow={t.testimonials.eyebrow}
				action={
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => move(-1)}
							aria-label={t.testimonials.previous}
							className={navButton}
						>
							<Icon name="chevronLeft" />
						</button>
						<button
							type="button"
							onClick={() => move(1)}
							aria-label={t.testimonials.next}
							className={navButton}
						>
							<Icon name="chevronRight" />
						</button>
					</div>
				}
			>
				{t.testimonials.title}
			</SectionHeading>
			<div className="grid gap-4 lg:grid-cols-3" aria-live="polite">
				{visible.map((item, i) => (
					<figure
						key={item.author}
						className={`glass-strong m-0 flex flex-col justify-between gap-6 rounded-3xl p-6 ${i > 0 ? "max-lg:hidden" : ""}`}
					>
						<div className="flex flex-col gap-3">
							<Icon name="quote" size={22} className="text-violet/60" />
							<blockquote className="m-0 text-sm leading-relaxed text-body italic">
								« {item.quote} »
							</blockquote>
						</div>
						<figcaption className="flex items-center gap-3">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#c4b5fd] to-[#a5b4fc] text-sm font-bold text-[#1e1b4b] dark:from-[#6d4df2] dark:to-[#4f6bf0] dark:text-white">
								{initials(item.author)}
							</span>
							<span className="flex flex-col">
								<span className="text-sm font-bold">{item.author}</span>
								<span className="text-sm text-muted">{item.context}</span>
							</span>
						</figcaption>
					</figure>
				))}
			</div>
			{t.testimonials.note && (
				<p className="m-0 mt-4 text-sm text-muted">{t.testimonials.note}</p>
			)}
		</Panel>
	);
}
