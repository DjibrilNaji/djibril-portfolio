import type { Dictionary } from "./types";

export const fr: Dictionary = {
	meta: {
		title: "Djibril Naji — Full Stack Developer",
		description:
			"Portfolio de Djibril Naji, développeur full stack (React, TypeScript, Node.js, Java) basé en région parisienne, éligible au VIE.",
	},
	skipLink: "Aller au contenu",
	nav: {
		label: "Navigation principale",
		top: "Accueil",
		about: "À propos",
		expertise: "Expertise",
		projects: "Projets",
		experience: "Expérience",
		reviews: "Avis",
		contact: "Contact",
		cta: "Parlons-en",
		openMenu: "Ouvrir le menu",
		closeMenu: "Fermer le menu",
	},
	theme: {
		toLight: "Activer le thème clair",
		toDark: "Activer le thème sombre",
	},
	language: { label: "Langue" },
	palette: {
		open: "Navigation rapide",
		placeholder: "Aller à une section, changer de thème…",
		goTo: "Aller à",
		theme: "Changer de thème",
		language: "Read in English",
		copyEmail: "Copier mon adresse email",
		empty: "Aucun résultat",
		hint: "↑ ↓ pour choisir · Entrée pour valider · Échap pour fermer",
	},
	marquee: "Technologies et outils que j'utilise",
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
		facts: [
			{ label: "Basé à", value: "Paris, France" },
			{ label: "Disponible", value: "VIE · mobilité internationale" },
			{ label: "Langues", value: "Français natif · anglais professionnel" },
			{ label: "Mode de travail", value: "100 % remote ou hybride" },
		],
	},
	expertise: {
		eyebrow: "Expertise",
		title: "Ce que je sais construire",
		intro:
			"Je travaille sur toute la chaîne d'une fonctionnalité : l'interface, l'API, la base de données, puis les tests et la mise en production.",
		provenAt: "Mis en pratique",
		toolsLabel: "Au quotidien",
		items: [
			{
				title: "Interfaces web",
				description:
					"Interfaces denses en données qui restent rapides et lisibles : filtres partagés, vues détail, design system, du desktop au mobile.",
				proof: "TrendTrack · Société Générale · JProject",
			},
			{
				title: "Back-end & APIs",
				description:
					"APIs REST structurées et sécurisées, de la modélisation des données à l'authentification.",
				proof: "TrendTrack · Société Générale · Lootopia",
			},
			{
				title: "Données",
				description:
					"Bases relationnelles et analytiques, requêtes sur de gros volumes, cache et files de tâches.",
				proof: "TrendTrack · E-commerce AI Company",
			},
			{
				title: "Qualité & livraison",
				description:
					"Tests automatisés, quality gates et CI/CD pour livrer souvent sans casser la production.",
				proof: "Société Générale · TrendTrack",
			},
		],
	},
	projects: {
		eyebrow: "Projets",
		title: "Ce que j'ai construit",
		cta: "Tous mes dépôts GitHub",
		code: "Voir le code",
		site: "Voir le site",
		privateNote: "Projet personnel · code privé",
		architecture: "Architecture",
		items: [
			{
				category: "SaaS · Freelance",
				description:
					"SaaS d'intelligence e-commerce : boutiques, publicités Meta, Google et TikTok, produits et emails de marques. Je travaille en front comme en back sur la V3.",
				highlights: [
					"Système de filtres partagé par les 5 modules de l'app, du desktop au mobile",
					"Vues détail des publicités Meta, Google, TikTok, Instagram et des emails",
					"Fonctionnalités livrées derrière des feature flags, adoption suivie avec PostHog",
				],
			},
			{
				category: "IA générative · Agents",
				description:
					"Une équipe d'agents IA qui cherche des produits e-commerce, les note sur 100, analyse la concurrence et crée la marque, pilotée depuis un tableau de bord.",
				highlights: [
					"Routeur IA : Gemini d'abord, bascule automatique sur un modèle local si l'API ne répond plus",
					"File de tâches PostgreSQL qui reprend après un redémarrage",
					"Tableau de bord en temps réel via LISTEN/NOTIFY et Server-Sent Events",
				],
			},
			{
				category: "Web · Mobile AR · API",
				description:
					"Plateforme de chasse au trésor : un site, une app mobile et une API commune. Projet d'école en binôme.",
				highlights: [
					"API Spring Boot sécurisée : JWT, sessions en base, double authentification par email",
					"Création de chasses géolocalisées sur une carte",
					"App mobile React Native avec un scanner en réalité augmentée (prototype)",
				],
			},
			{
				category: "Automatisation · IA",
				description:
					"Mon outil de recherche de VIE. Chaque matin, il récupère les nouvelles offres de Business France et leur donne une note. Pour une offre retenue, un bouton lance une routine Claude Code qui prépare un CV et une lettre adaptés.",
				highlights: [
					"Import quotidien planifié et note par mots-clés, sans coût d'IA",
					"CV et lettre générés en PDF et en Word, vérifiés pour tenir sur une page",
					"API protégée par jeton pour les routines, rappel par email avant la clôture d'une offre",
				],
				note: "Code privé · contient mes données personnelles",
			},
			{
				category: "Automatisation · IA",
				description:
					"Le projet jumeau de VIE Radar, pour les missions de Service Civique à l'étranger et en outre-mer, pensé pour partir à deux.",
				highlights: [
					"Note selon la destination, les places pour deux, la date de début et la durée",
					"Pays ou territoire retrouvé à partir des coordonnées de chaque mission",
					"Un dossier, CV et lettre, généré pour chaque personne",
				],
				note: "Code privé · contient mes données personnelles",
			},
			{
				category: "E-commerce · Projet d'équipe",
				description:
					"Site e-commerce et back-office pour une marque de mobilier. Projet de Bachelor en équipe de 5.",
				highlights: [
					"Parcours d'achat complet avec paiement Stripe",
					"Back-office avec tableaux de bord (Chart.js)",
					"Site traduit, images sur AWS S3, emails via SendGrid",
				],
			},
			{
				category: "Data · Dashboard",
				description:
					"Croise trois APIs publiques pour donner un score stratégique à chaque pays, avec graphiques et export PDF.",
				highlights: [
					"API Hono typée de bout en bout avec Kysely et Zod",
					"Agrégation et normalisation de sources hétérogènes",
					"Lancement de toute l'application en une commande avec Docker",
				],
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
			{
				title: "Master Développement Full Stack",
				detail: "Sup de Vinci, Paris",
			},
			{ title: "Bachelor Développement", detail: "Sup de Vinci, Paris" },
			{ title: "BTS SIO", detail: "Lycée de l'Hautil" },
			{ title: "Bac S", detail: "Lycée Jules Ferry" },
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
			"L'envoi automatique est indisponible pour le moment : votre messagerie s'ouvre avec le message prêt à envoyer. Sinon, écrivez-moi à najidjibril@gmail.com.",
		copy: "Copier l'email",
		copied: "Email copié",
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
