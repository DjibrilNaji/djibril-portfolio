import { describe, expect, it, vi } from "vitest";
import { mailtoUrl, sendContactMessage } from "./contact";

const message = {
	name: "Ada Lovelace",
	email: "ada@example.com",
	project: "VIE",
	message: "Hello & welcome",
};

const respond = (status: number, body: unknown) =>
	vi
		.fn()
		.mockResolvedValue(
			new Response(JSON.stringify(body), { status }),
		) as unknown as typeof fetch;

describe("sendContactMessage", () => {
	it("sends the key, subject and fields, and reports success", async () => {
		const fetcher = respond(200, { success: true });
		await expect(sendContactMessage("key", message, fetcher)).resolves.toBe(
			true,
		);

		const [, init] = (fetcher as unknown as ReturnType<typeof vi.fn>).mock
			.calls[0];
		expect(JSON.parse(init.body)).toMatchObject({
			access_key: "key",
			subject: "[Portfolio] VIE · Ada Lovelace",
			email: "ada@example.com",
		});
	});

	it("returns false when the quota is reached", async () => {
		const fetcher = respond(429, { success: false, message: "quota" });
		await expect(sendContactMessage("key", message, fetcher)).resolves.toBe(
			false,
		);
	});

	it("returns false when the service answers 200 without success", async () => {
		const fetcher = respond(200, { success: false });
		await expect(sendContactMessage("key", message, fetcher)).resolves.toBe(
			false,
		);
	});

	it("returns false when the network fails", async () => {
		const fetcher = vi
			.fn()
			.mockRejectedValue(new TypeError("offline")) as unknown as typeof fetch;
		await expect(sendContactMessage("key", message, fetcher)).resolves.toBe(
			false,
		);
	});
});

describe("mailtoUrl", () => {
	it("encodes subject and body", () => {
		const url = mailtoUrl("me@example.com", message);
		expect(url.startsWith("mailto:me@example.com?subject=")).toBe(true);
		expect(decodeURIComponent(url)).toContain("Hello & welcome");
		expect(url).not.toContain("Hello & welcome");
	});
});
