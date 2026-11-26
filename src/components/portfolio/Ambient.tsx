import { useEffect, useRef } from "react";
import { expertise, workingTools } from "#/data/portfolio";
import { useI18n } from "#/i18n";

// Soft light that trails the mouse across the page (mouse only, hidden for reduced motion).
export function CursorGlow() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches)
			return;
		let frame = 0;
		const onMove = (event: PointerEvent) => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				el.style.opacity = "0.7";
				el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("pointermove", onMove);
		};
	}, []);

	return (
		<div aria-hidden="true" className="cursor-glow-layer">
			<div ref={ref} className="cursor-glow" />
		</div>
	);
}

const stack = [
	...new Set([...expertise.flatMap((d) => d.tech), ...workingTools]),
];

// Endless band of everything I work with; the copy is duplicated for a seamless loop.
export function StackMarquee() {
	const { t } = useI18n();
	const items = (hidden: boolean) => (
		<ul
			aria-hidden={hidden || undefined}
			className="m-0 flex shrink-0 list-none items-center gap-3 p-0 pr-3"
		>
			{stack.map((tech) => (
				<li
					key={tech}
					className="glass-strong rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-ink"
				>
					{tech}
				</li>
			))}
		</ul>
	);

	return (
		<section aria-label={t.marquee} className="reveal">
			<div className="marquee overflow-hidden py-1">
				<div className="marquee-track flex w-max">
					{items(false)}
					{items(true)}
				</div>
			</div>
		</section>
	);
}
