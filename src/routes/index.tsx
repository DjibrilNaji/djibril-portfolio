import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage, portfolioHead } from "#/components/portfolio/Page";

export const Route = createFileRoute("/")({
	head: () => portfolioHead("fr"),
	component: () => <PortfolioPage lang="fr" />,
});
