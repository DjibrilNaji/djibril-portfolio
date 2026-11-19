import { type FormEvent, useState } from "react";
import { profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import { Eyebrow, Icon, type IconName, Panel, pillDark } from "./ui";

const channels: { icon: IconName; label: string; href?: string }[] = [
	{ icon: "mail", label: profile.email, href: `mailto:${profile.email}` },
	{
		icon: "linkedin",
		label: "linkedin.com/in/djibrilnaji",
		href: profile.linkedin,
	},
	{ icon: "github", label: "github.com/DjibrilNaji", href: profile.github },
	{ icon: "mapPin", label: profile.location },
];

const field =
	"w-full rounded-xl border border-field-border bg-field px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted focus:border-violet focus:ring-3 focus:ring-violet/15";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
	const { t } = useI18n();
	const [status, setStatus] = useState<Status>("idle");

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		const data = new FormData(form);
		const subject = `[Portfolio] ${data.get("project")} — ${data.get("name")}`;

		// No key configured: open the visitor's mail client instead.
		if (!profile.contactFormKey) {
			const body = `${data.get("message")}\n\n${data.get("name")} · ${data.get("email")}`;
			window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
			return;
		}

		setStatus("sending");
		data.append("access_key", profile.contactFormKey);
		data.append("subject", subject);
		data.append("from_name", "Portfolio");
		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: data,
			});
			const json = await res.json();
			if (!res.ok || !json.success) throw new Error(json.message);
			form.reset();
			setStatus("sent");
		} catch {
			setStatus("error");
		}
	}

	return (
		<Panel id="contact" className="relative overflow-hidden">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#e4dcff_35%,#b8a6fb_70%,#9d8cf0_100%)] opacity-70 blur-[2px] dark:opacity-15"
			/>
			<div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-3">
						<Eyebrow>{t.contact.eyebrow}</Eyebrow>
						<h2 className="m-0 text-2xl leading-snug font-bold tracking-tight md:text-[28px]">
							{t.contact.title[0]}
							<br />
							{t.contact.title[1]}
						</h2>
					</div>
					<ul className="m-0 flex list-none flex-col gap-3 p-0">
						{channels.map((channel) => {
							const content = (
								<>
									<span className="glass-strong flex size-10 items-center justify-center rounded-xl text-ink">
										<Icon name={channel.icon} />
									</span>
									<span className="text-sm font-medium">{channel.label}</span>
								</>
							);
							return (
								<li key={channel.label}>
									{channel.href ? (
										<a
											href={channel.href}
											className="flex min-h-11 items-center gap-3 hover:text-violet"
										>
											{content}
										</a>
									) : (
										<span className="flex min-h-11 items-center gap-3">
											{content}
										</span>
									)}
								</li>
							);
						})}
					</ul>
				</div>

				<form
					onSubmit={handleSubmit}
					className="glass-strong flex flex-col gap-3 rounded-3xl p-5 md:p-6"
				>
					<div className="grid gap-3 sm:grid-cols-2">
						<label className="flex flex-col gap-1.5 text-sm font-semibold text-body">
							{t.contact.name}
							<input
								name="name"
								required
								autoComplete="name"
								className={field}
							/>
						</label>
						<label className="flex flex-col gap-1.5 text-sm font-semibold text-body">
							{t.contact.email}
							<input
								name="email"
								type="email"
								required
								autoComplete="email"
								className={field}
							/>
						</label>
					</div>
					<label className="flex flex-col gap-1.5 text-sm font-semibold text-body">
						{t.contact.project}
						<select
							name="project"
							className={field}
							defaultValue={t.contact.projectOptions[0]}
						>
							{t.contact.projectOptions.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</label>
					<label className="flex flex-col gap-1.5 text-sm font-semibold text-body">
						{t.contact.message}
						<textarea
							name="message"
							required
							rows={4}
							className={`${field} resize-y`}
						/>
					</label>
					{/* Honeypot: bots fill it, Web3Forms drops those submissions */}
					<input
						type="checkbox"
						name="botcheck"
						tabIndex={-1}
						autoComplete="off"
						aria-hidden="true"
						className="hidden"
					/>
					<button
						type="submit"
						disabled={status === "sending"}
						className={`${pillDark} mt-1 justify-center disabled:opacity-60 sm:self-start sm:px-10`}
					>
						{status === "sending" ? t.contact.sending : t.contact.submit}{" "}
						<Icon name="send" size={16} />
					</button>
					<output
						className={`m-0 block text-sm font-medium ${status === "error" ? "text-red-600 dark:text-red-400" : "text-mint-ink"}`}
					>
						{status === "sent" && t.contact.sent}
						{status === "error" && t.contact.error}
					</output>
				</form>
			</div>
		</Panel>
	);
}

export function Footer() {
	const { t } = useI18n();

	return (
		<footer className="flex flex-wrap items-center justify-between gap-3 px-2 py-6 text-sm text-muted">
			<span>
				© {new Date().getFullYear()} {profile.firstName} {profile.lastName}
			</span>
			<span>
				{profile.title} · {t.footer.tagline}
			</span>
		</footer>
	);
}
