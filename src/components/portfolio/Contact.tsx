import { type FormEvent, useState } from "react";
import { profile } from "#/data/portfolio";
import { useI18n } from "#/i18n";
import {
	type ContactMessage,
	mailtoUrl,
	sendContactMessage,
} from "#/lib/contact";
import { Eyebrow, external, Icon, type IconName, Panel, pillDark } from "./ui";

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
		// Honeypot ticked: a bot filled the hidden field, pretend it worked.
		if (data.get("botcheck")) return setStatus("sent");

		const message: ContactMessage = {
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			project: String(data.get("project") ?? ""),
			message: String(data.get("message") ?? ""),
		};
		const openMailClient = () => {
			window.location.href = mailtoUrl(profile.email, message);
		};
		if (!profile.contactFormKey) return openMailClient();

		setStatus("sending");
		if (await sendContactMessage(profile.contactFormKey, message)) {
			form.reset();
			setStatus("sent");
		} else {
			// Monthly quota reached (250 on the free plan) or service down:
			// hand the prefilled message to the visitor's mail client.
			setStatus("error");
			openMailClient();
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
								<li key={channel.label} className="flex items-center gap-2">
									{channel.href ? (
										<a
											href={channel.href}
											{...(channel.href.startsWith("http") ? external : {})}
											className="flex min-h-11 items-center gap-3 hover:text-violet"
										>
											{content}
										</a>
									) : (
										<span className="flex min-h-11 items-center gap-3">
											{content}
										</span>
									)}
									{channel.icon === "mail" && <CopyEmail />}
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

function CopyEmail() {
	const { t } = useI18n();
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			// Clipboard blocked (permissions, insecure context): the mailto link is still there.
		}
	}

	return (
		<button
			type="button"
			onClick={copy}
			className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-violet ring-1 ring-line transition hover:bg-violet-soft"
		>
			<Icon name={copied ? "check" : "copy"} size={14} />
			<span aria-live="polite">
				{copied ? t.contact.copied : t.contact.copy}
			</span>
		</button>
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
