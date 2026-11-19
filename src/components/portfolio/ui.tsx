import type { ReactNode } from "react";

const iconPaths = {
	arrowUpRight: (
		<>
			<path d="M7 17 17 7" />
			<path d="M8 7h9v9" />
		</>
	),
	sparkle: (
		<path d="M12 3v4M12 17v4M3 12h4M17 12h4M12 7c.6 2.7 2.3 4.4 5 5-2.7.6-4.4 2.3-5 5-.6-2.7-2.3-4.4-5-5 2.7-.6 4.4-2.3 5-5Z" />
	),
	calendar: (
		<>
			<rect x="3" y="5" width="18" height="16" rx="3" />
			<path d="M8 3v4M16 3v4M3 10h18" />
		</>
	),
	folder: (
		<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
	),
	users: (
		<>
			<circle cx="9" cy="8" r="3.5" />
			<path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
			<path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14.2c2.1.7 3.5 2.8 3.5 5.8" />
		</>
	),
	layout: (
		<>
			<rect x="3" y="4" width="18" height="16" rx="3" />
			<path d="M3 9h18M9 9v11" />
		</>
	),
	server: (
		<>
			<rect x="3" y="4" width="18" height="7" rx="2" />
			<rect x="3" y="13" width="18" height="7" rx="2" />
			<path d="M7 7.5h.01M7 16.5h.01" />
		</>
	),
	smartphone: (
		<>
			<rect x="6" y="2.5" width="12" height="19" rx="3" />
			<path d="M11 18h2" />
		</>
	),
	shield: (
		<>
			<path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6Z" />
			<path d="m9 12 2 2 4-4" />
		</>
	),
	mail: (
		<>
			<rect x="3" y="5" width="18" height="14" rx="3" />
			<path d="m4 7 8 6 8-6" />
		</>
	),
	linkedin: (
		<>
			<rect x="3" y="3" width="18" height="18" rx="4" />
			<path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" />
		</>
	),
	github: (
		<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
	),
	mapPin: (
		<>
			<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
			<circle cx="12" cy="9.5" r="2.5" />
		</>
	),
	quote: <path d="M7 7h4v4c0 3-1.5 5-4 6M14 7h4v4c0 3-1.5 5-4 6" />,
	sun: (
		<>
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
		</>
	),
	moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />,
	menu: <path d="M4 7h16M4 12h16M4 17h16" />,
	close: <path d="M6 6l12 12M18 6 6 18" />,
	chevronLeft: <path d="m15 6-6 6 6 6" />,
	chevronRight: <path d="m9 6 6 6-6 6" />,
	send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4Z" />,
	graduation: (
		<>
			<path d="m2 9 10-5 10 5-10 5Z" />
			<path d="M6 11v5c3 2.5 9 2.5 12 0v-5" />
		</>
	),
	briefcase: (
		<>
			<rect x="3" y="7" width="18" height="13" rx="3" />
			<path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
		</>
	),
};

export type IconName = keyof typeof iconPaths;

export function Icon({
	name,
	size = 18,
	className,
}: {
	name: IconName;
	size?: number;
	className?: string;
}) {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			{iconPaths[name]}
		</svg>
	);
}

export const tones = {
	peach: "bg-peach text-peach-ink",
	lilac: "bg-lilac text-lilac-ink",
	sky: "bg-sky text-sky-ink",
	mint: "bg-mint text-mint-ink",
} as const;

export const container = "mx-auto w-full max-w-[1200px] px-4 md:px-6";

export function Panel({
	id,
	children,
	className = "",
}: {
	id?: string;
	children: ReactNode;
	className?: string;
}) {
	return (
		<section
			id={id}
			className={`glass scroll-mt-28 rounded-[var(--radius-panel)] p-6 md:p-10 ${className}`}
		>
			{children}
		</section>
	);
}

export function Eyebrow({ children }: { children: ReactNode }) {
	return (
		<p className="m-0 text-xs font-semibold tracking-[0.12em] text-violet uppercase">
			{children}
		</p>
	);
}

export function SectionHeading({
	eyebrow,
	children,
	action,
}: {
	eyebrow: string;
	children: ReactNode;
	action?: ReactNode;
}) {
	return (
		<div className="mb-8 flex flex-wrap items-end justify-between gap-4">
			<div className="flex flex-col gap-2">
				<Eyebrow>{eyebrow}</Eyebrow>
				<h2 className="m-0 text-2xl font-bold tracking-tight md:text-[28px]">
					{children}
				</h2>
			</div>
			{action}
		</div>
	);
}

export const pillButton =
	"inline-flex min-h-11 items-center gap-2.5 rounded-full px-5 text-sm font-semibold transition";
export const pillDark = `${pillButton} bg-ink text-on-ink shadow-[var(--button-shadow)] hover:bg-ink-hover`;
export const pillGlass = `${pillButton} glass-strong text-ink hover:bg-hover-surface`;

export function RoundArrow() {
	return (
		<span
			aria-hidden="true"
			className="glass-strong inline-flex size-9 shrink-0 items-center justify-center rounded-full text-ink transition group-hover:bg-ink group-hover:text-on-ink"
		>
			<Icon name="arrowUpRight" size={16} />
		</span>
	);
}
