export type ContactMessage = {
	name: string;
	email: string;
	project: string;
	message: string;
};

export const contactSubject = (m: ContactMessage) =>
	`[Portfolio] ${m.project} · ${m.name}`;

export function mailtoUrl(to: string, m: ContactMessage) {
	const body = `${m.message}\n\n${m.name} · ${m.email}`;
	return `mailto:${to}?subject=${encodeURIComponent(contactSubject(m))}&body=${encodeURIComponent(body)}`;
}

/**
 * Sends the message through Web3Forms. Resolves to false (never throws) when the
 * service refuses it, is unreachable or the monthly quota is reached, so the
 * caller can fall back to the visitor's mail client.
 */
export async function sendContactMessage(
	accessKey: string,
	m: ContactMessage,
	fetcher: typeof fetch = fetch,
): Promise<boolean> {
	try {
		const res = await fetcher("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				access_key: accessKey,
				subject: contactSubject(m),
				from_name: "Portfolio",
				...m,
			}),
		});
		const json: { success?: boolean } = await res.json();
		return res.ok && json.success === true;
	} catch {
		return false;
	}
}
