import { useNavigate } from "@tanstack/react-router";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { profile } from "#/data/portfolio";
import { langPaths, useI18n } from "#/i18n";
import { sections } from "./Header";
import { toggleTheme } from "./ThemeToggle";
import { Icon, type IconName } from "./ui";

type Command = { id: string; label: string; icon: IconName; run: () => void };

const normalize = (s: string) =>
	s
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase();

const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);

// ⌘K / Ctrl+K: jump anywhere or run an action from the keyboard.
export function CommandPalette() {
	const { lang, t } = useI18n();
	const navigate = useNavigate();
	const dialog = useRef<HTMLDialogElement>(null);
	const listId = useId();
	const [query, setQuery] = useState("");
	const [active, setActive] = useState(0);
	const [mod, setMod] = useState("Ctrl");

	const commands = useMemo<Command[]>(() => {
		const open = (url: string) => () =>
			window.open(url, "_blank", "noopener,noreferrer");
		const other = lang === "fr" ? "en" : "fr";
		return [
			...sections.map((s) => ({
				id: s.id,
				label: `${t.palette.goTo} ${t.nav[s.key]}`,
				icon: "arrowUpRight" as const,
				run: () =>
					document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" }),
			})),
			{
				id: "theme",
				label: t.palette.theme,
				icon: "moon",
				run: toggleTheme,
			},
			{
				id: "lang",
				label: t.palette.language,
				icon: "chevronRight",
				run: () => navigate({ to: langPaths[other] }),
			},
			{
				id: "email",
				label: t.palette.copyEmail,
				icon: "copy",
				run: () => navigator.clipboard?.writeText(profile.email),
			},
			{
				id: "github",
				label: "GitHub",
				icon: "github",
				run: open(profile.github),
			},
			{
				id: "linkedin",
				label: "LinkedIn",
				icon: "linkedin",
				run: open(profile.linkedin),
			},
		];
	}, [lang, t, navigate]);

	const results = commands.filter((c) =>
		normalize(c.label).includes(normalize(query.trim())),
	);

	const show = () => {
		setQuery("");
		setActive(0);
		dialog.current?.showModal();
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: `show` only touches a ref and state setters
	useEffect(() => {
		setMod(isMac() ? "⌘" : "Ctrl");
		const onKey = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				if (dialog.current?.open) dialog.current.close();
				else show();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	const run = (command: Command | undefined) => {
		if (!command) return;
		dialog.current?.close();
		command.run();
	};

	const onKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === "ArrowDown" || event.key === "ArrowUp") {
			event.preventDefault();
			const step = event.key === "ArrowDown" ? 1 : -1;
			setActive((i) => (i + step + results.length) % results.length);
		} else if (event.key === "Enter") {
			event.preventDefault();
			run(results[active]);
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={show}
				aria-label={t.palette.open}
				aria-keyshortcuts="Meta+K Control+K"
				className="glass-strong hidden h-11 shrink-0 items-center gap-2 rounded-full pr-2 pl-3.5 text-sm font-medium text-body transition hover:bg-hover-surface hover:text-ink xl:inline-flex"
			>
				<Icon name="search" size={16} />
				<kbd className="rounded-md bg-chip px-1.5 py-0.5 font-sans text-xs font-semibold ring-1 ring-line">
					{mod} K
				</kbd>
			</button>

			<dialog
				ref={dialog}
				aria-label={t.palette.open}
				onClick={(event) => {
					if (event.target === dialog.current) dialog.current.close();
				}}
				onKeyDown={onKeyDown}
				className="palette m-auto mt-[12vh] w-[min(560px,calc(100vw-32px))] overflow-hidden rounded-3xl border border-line bg-ground p-0 text-ink shadow-2xl"
			>
				<div className="flex items-center gap-3 border-b border-line px-5">
					<Icon name="search" size={18} className="shrink-0 text-muted" />
					<input
						value={query}
						onChange={(event) => {
							setQuery(event.target.value);
							setActive(0);
						}}
						placeholder={t.palette.placeholder}
						role="combobox"
						aria-expanded="true"
						aria-controls={listId}
						aria-activedescendant={
							results[active] ? `${listId}-${results[active].id}` : undefined
						}
						className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
					/>
				</div>
				<div
					id={listId}
					role="listbox"
					className="max-h-[50vh] overflow-y-auto p-2"
				>
					{results.map((command, i) => (
						<div
							key={command.id}
							id={`${listId}-${command.id}`}
							role="option"
							tabIndex={-1}
							aria-selected={i === active}
							onClick={() => run(command)}
							onKeyDown={(event) => event.key === "Enter" && run(command)}
							onPointerMove={() => setActive(i)}
							className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 text-sm font-medium ${
								i === active ? "bg-violet-soft text-violet" : "text-body"
							}`}
						>
							<Icon name={command.icon} size={16} className="shrink-0" />
							{command.label}
						</div>
					))}
					{results.length === 0 && (
						<p className="m-0 px-3 py-6 text-center text-sm text-muted">
							{t.palette.empty}
						</p>
					)}
				</div>
				<p className="m-0 border-t border-line px-5 py-2.5 text-xs text-muted">
					{t.palette.hint}
				</p>
			</dialog>
		</>
	);
}
