import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage, portfolioHead } from "#/components/portfolio/Page";

export const Route = createFileRoute("/en")({
	head: () => portfolioHead("en"),
	component: () => <PortfolioPage lang="en" />,
});
