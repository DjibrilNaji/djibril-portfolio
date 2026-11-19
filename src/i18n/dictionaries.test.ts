import { describe, expect, it } from "vitest";
import {
	educationSteps,
	expertise,
	projects,
	testimonialAuthors,
} from "#/data/portfolio";
import { en } from "./en";
import { fr } from "./fr";
import { langFromPath } from "./index";

// Lists in the dictionaries line up by index with src/data/portfolio.ts;
// a missing entry would silently render "undefined" on one language only.
describe.each([
	["fr", fr],
	["en", en],
])("%s dictionary", (_, t) => {
	it("has one entry per item of the shared data", () => {
		expect(t.expertise.items).toHaveLength(expertise.length);
		expect(t.projects.items).toHaveLength(projects.length);
		expect(t.education.items).toHaveLength(educationSteps.length);
		expect(t.testimonials.items).toHaveLength(testimonialAuthors.length);
	});

	it("has no empty string anywhere", () => {
		const empty: string[] = [];
		const walk = (value: unknown, path: string) => {
			if (typeof value === "string") {
				if (!value.trim()) empty.push(path);
			} else if (value && typeof value === "object") {
				for (const [k, v] of Object.entries(value)) walk(v, `${path}.${k}`);
			}
		};
		walk(t, "t");
		expect(empty).toEqual([]);
	});
});

it("both dictionaries have the same experience timeline", () => {
	expect(fr.experience.items.map((i) => i.company === "TrendTrack")).toEqual(
		en.experience.items.map((i) => i.company === "TrendTrack"),
	);
	expect(fr.experience.items).toHaveLength(en.experience.items.length);
});

describe("langFromPath", () => {
	it.each([
		["/", "fr"],
		["/en", "en"],
		["/en/", "en"],
		["/english", "fr"],
	])("%s → %s", (path, lang) => {
		expect(langFromPath(path)).toBe(lang);
	});
});
