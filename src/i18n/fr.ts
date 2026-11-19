import type { Dictionary } from "./types";

export const fr: Dictionary = {
	meta: {
		title: "Djibril Naji — Full Stack Developer",
		description:
			"Portfolio de Djibril Naji, développeur full stack (React, TypeScript, Node.js, Java) basé en région parisienne, éligible au VIE.",
	},
	nav: {
		label: "Navigation principale",
		top: "Accueil",
		about: "À propos",
		services: "Services",
		projects: "Projets",
		experience: "Expérience",
		reviews: "Avis",
		contact: "Contact",
		cta: "Parlons-en",
	},
	theme: {
		toLight: "Activer le thème clair",
		toDark: "Activer le thème sombre",
	},
	language: { label: "Langue" },
	hero: {
		eyebrow: "Bonjour, je m'appelle",
		intro:
			"Développeur full stack avec près de 4 ans d'expérience entre une startup, une grande banque française et une mission freelance 100 % à distance. Je livre des fonctionnalités de bout en bout, de React aux APIs (NestJS, Spring Boot) et aux bases de données.",
		availability:
			"Éligible au VIE · Ouvert à une mobilité partout dans le monde (États-Unis, Canada, Espagne, Portugal…)",
		ctaProjects: "Voir mes projets",
		ctaContact: "Me contacter",
		trustedBy: "Ils m'ont fait confiance",
		portraitAlt: "Portrait de Djibril Naji",
		yearsLabel: ["Ans", "d'expérience"],
		promoTitle: "Major de promotion",
	},
	about: {
		eyebrow: "À propos",
		title: ["À l'aise à distance,", "livré de bout en bout"],
		text: "Pendant deux ans, j'ai travaillé tous les jours en anglais avec des équipes d'ingénieurs en Inde. Depuis bientôt un an, je travaille en freelance depuis l'Asie, en autonomie complète. Je parle français et anglais. À côté, je voyage, je fais du sport et je passe pas mal de temps sur l'IA générative (Claude, Claude Code) et sur mes projets perso. Je cherche maintenant un poste de développeur full stack en VIE.",
		cta: "Voir mon LinkedIn",
		highlights: [
			"Ans d'expérience",
			"Ans à l'international",
			"Recommandations",
		],
	},
	services: {
		eyebrow: "Ce que je fais",
		title: "Mes services",
		items: [
			{
				title: "Développement front-end",
				description:
					"Interfaces React, Next.js et TanStack intégrées depuis Figma dans un design system, responsive du desktop au mobile.",
			},
			{
				title: "Back-end & APIs",
				description:
					"APIs REST avec NestJS, Spring Boot ou Django, sur PostgreSQL, ClickHouse, Redis ou MongoDB.",
			},
			{
				title: "Livraison produit",
				description:
					"Fonctionnalités livrées derrière des feature flags, adoption suivie avec PostHog, interfaces traduites en plusieurs langues.",
			},
			{
				title: "Qualité & CI/CD",
				description:
					"Jest, Vitest, Playwright, Cypress, JUnit, quality gates SonarQube et pipelines GitHub Actions.",
			},
		],
	},
	tools: {
		eyebrow: "Outils & compétences",
		title: "Technologies que j'utilise",
	},
	projects: {
		eyebrow: "Projets à la une",
		title: "Travaux sélectionnés",
		cta: "Tous les projets",
		items: [
			{
				category: "SaaS · Freelance",
				description:
					"SaaS d'intelligence e-commerce sur lequel je travaille au quotidien, en front comme en back : système de filtres, vues détail des publicités, endpoints NestJS.",
			},
			{
				category: "Web · Mobile AR · API",
				description:
					"Plateforme de chasse au trésor : client web, application mobile en réalité augmentée et API.",
			},
			{
				category: "SaaS",
				description:
					"SaaS de gestion de tâches, multilingue, avec authentification et animations soignées.",
			},
			{
				category: "Data · Dashboard",
				description:
					"Croise trois APIs publiques pour noter des pays, avec graphiques et export PDF.",
			},
			{
				category: "Cloud",
				description:
					"Crée des machines virtuelles Azure éphémères selon le rôle de l'utilisateur et fournit l'accès RDP / SSH.",
			},
			{
				category: "NoSQL",
				description:
					"Application de voyage reposant sur trois bases NoSQL complémentaires : document, graphe et cache.",
			},
			{
				category: "E-commerce",
				description:
					"Site e-commerce et back-office pour une marque de mobilier — projet d'équipe Bachelor B3.",
			},
		],
	},
	experience: {
		eyebrow: "Parcours professionnel",
		title: "Expérience",
		techLabel: "Technologies",
		items: [
			{
				company: "TrendTrack",
				url: "https://www.trendtrack.io/fr",
				role: "Développeur Full Stack (Freelance)",
				period: "Mars 2026 — Aujourd'hui",
				meta: ["Freelance", "100 % à distance depuis l'Asie"],
				description:
					"SaaS d'intelligence e-commerce : boutiques en ligne, publicités Meta, Google et TikTok, produits et emails de marques.",
				missions: [
					"Évolution de la V2, puis construction de la V3 en front et en back : plus de 280 pull requests mergées",
					"Refonte du système de filtres partagé par les 5 modules de l'app (Explorer, Shops, Ads, Products, Emails), du desktop au mobile",
					"Refonte des vues détail des publicités Meta, Google, TikTok, Instagram et des emails",
					"Développement d'endpoints NestJS sur PostgreSQL et ClickHouse",
					"Livraison de fonctionnalités derrière des feature flags et suivi de l'adoption avec PostHog, dans une interface traduite en 7 langues",
					"Intégration des maquettes Figma dans le design system (dark mode, composants partagés) et prise en compte des retours QA",
				],
				stack: [
					"React",
					"TypeScript",
					"TanStack",
					"NestJS",
					"PostgreSQL",
					"ClickHouse",
					"PostHog",
				],
			},
			{
				company: "Pause professionnelle — Voyage",
				period: "Oct. 2025 — Mars 2026",
				meta: [],
				isBreak: true,
			},
			{
				company: "Société Générale",
				role: "Développeur Full Stack",
				period: "Oct. 2023 — Oct. 2025",
				meta: ["Alternance · Hybride", "La Défense, Paris"],
				description:
					"MyNPSC : application interne qui sert à valider les nouveaux produits financiers de la banque.",
				missions: [
					"Développement de fonctionnalités front-end (React, TypeScript) et back-end (Java, Spring Boot)",
					"Résolution d'incidents de production et amélioration des performances",
					"Sécurisation des mises en production avec des tests automatisés (Jest, Cypress, JUnit, Mockito), les quality gates SonarQube et la CI/CD GitHub",
					"Travail quotidien en anglais avec des équipes d'ingénieurs en Inde, en Scrum, et documentation des évolutions",
				],
				stack: [
					"React",
					"TypeScript",
					"Java",
					"Spring Boot",
					"PostgreSQL",
					"Cypress",
					"Jest",
					"JUnit",
					"SonarQube",
				],
			},
			{
				company: "JProject",
				role: "Développeur Full Stack (startup)",
				period: "Sept. 2022 — Sept. 2023",
				meta: ["Alternance · Hybride", "Cergy-Pontoise"],
				description:
					"Plateforme clé en main pour restaurants : site web, commande à emporter et click & collect.",
				missions: [
					"Conception et développement de quasiment toute la plateforme (seul l'espace admin existait), dans une équipe de 2 développeurs et 1 stagiaire",
					"APIs REST en Django documentées avec Swagger, et interface Vue.js responsive à partir des maquettes",
					"Diagnostic et correction de bugs pendant les phases de test",
				],
				stack: ["Vue.js", "Django", "SQL", "Docker", "Swagger"],
			},
			{
				company: "HSSAINI Saad",
				role: "Développeur Full Stack",
				period: "Janv. 2022 — Févr. 2022",
				meta: ["Ukraine"],
				description:
					"Développement d'APIs REST en Java et PostgreSQL et d'interfaces React.",
				stack: ["Java", "PostgreSQL", "React"],
			},
		],
	},
	education: {
		eyebrow: "Formation",
		title: "Mon parcours académique",
		topOfClass: "Major de promotion",
		items: [
			{ title: "Bac S", detail: "Scientifique · Lycée Jules Ferry" },
			{
				title: "BTS SIO",
				detail: "Développement logiciel (bac+2) · Lycée de l'Hautil",
			},
			{
				title: "Bachelor",
				detail: "Major de promotion · Sup de Vinci, Paris",
			},
			{
				title: "Master 1",
				detail: "Développement Full Stack · Sup de Vinci",
			},
			{
				title: "Master",
				detail: "Développement Full Stack · Sup de Vinci, Paris",
			},
		],
	},
	testimonials: {
		eyebrow: "Recommandations",
		title: "Ce qu'ils en disent",
		previous: "Recommandation précédente",
		next: "Recommandation suivante",
		items: [
			{
				quote:
					"Tous les tickets confiés ont été rendus dans les délais, avec un excellent niveau de qualité. Travailler avec lui est un vrai atout pour le projet !",
				context: "Consultant Project Management · Société Générale",
			},
			{
				quote:
					"Il est aujourd'hui un très bon développeur full stack et un véritable atout pour l'équipe qui a la chance de l'avoir.",
				context: "Développeur Full Stack & Tech Lead",
			},
			{
				quote:
					"Il ne se contente pas de coder, mais est sensible aux problématiques métier, à l'aspect commercial et aux enjeux financiers.",
				context: "Product Owner · JProject",
			},
			{
				quote:
					"Il maîtrise vraiment bien React, Remix et Java, et il arrive toujours à trouver des solutions efficaces, même sur les parties les plus complexes.",
				context: "Freelance Creative Developer",
			},
			{
				quote:
					"Djibril possède une excellente expertise technique et sait expliquer des concepts complexes de manière claire.",
				context: "Développeur web front-end",
			},
		],
	},
	contact: {
		eyebrow: "Contact",
		title: ["Un projet en tête ?", "Construisons-le ensemble."],
		name: "Votre nom",
		email: "Votre email",
		project: "Votre projet",
		message: "Votre message",
		submit: "Envoyer le message",
		sending: "Envoi en cours…",
		sent: "Merci, votre message est bien envoyé. Je vous réponds rapidement.",
		error:
			"L'envoi a échoué. Réessayez ou écrivez-moi directement à najidjibril@gmail.com.",
		projectOptions: [
			"VIE",
			"Mission freelance",
			"Poste en CDI",
			"Application web",
			"Application mobile",
			"Autre",
		],
	},
	footer: { tagline: "Paris & remote" },
};
