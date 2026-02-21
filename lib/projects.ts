import { cn } from "@/lib/utils";

export type ProjectCategory =
  | "All"
  | "Web"
  | "AI"
  | "Mobile"
  | "Design"
  | "SaaS";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  image: string;
  gallery: string[];
  problem: string;
  solution: string;
  features: string[];
  results?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "capi",
    title: "Capi",
    description:
      "Modern web platform built with clean UI and optimized performance.",
    longDescription:
      "Capi is a modern web application focused on performance, scalability, and clean user experience. The project emphasizes responsive layouts, optimized loading times, and structured architecture.",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/realisations/capi-hero.png",
    gallery: ["/realisations/capi-hero.png"],
    problem: "Need for a scalable and modern web platform.",
    solution:
      "Built a clean, optimized and maintainable architecture using modern web technologies.",
    features: [
      "Responsive design",
      "Modern UI system",
      "Performance optimized",
      "Clean component architecture",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "decode-hack",
    title: "Decode Hack",
    description: "Hackathon platform and event website.",
    longDescription:
      "Decode Hack is an event-focused website designed for hackathon organization and participant management.",
    category: "Web",
    tags: ["Next.js", "Event", "Landing Page"],
    image: "/realisations/decode-hero.png",
    gallery: ["/realisations/decode-hero.png"],
    problem: "Need for an engaging and informative hackathon website.",
    solution:
      "Built a dynamic and visually engaging landing page with structured sections.",
    features: [
      "Event presentation",
      "Registration system",
      "Responsive layout",
    ],
    demoUrl: "/realisations/decode.png",
  },
  {
    id: "3",
    slug: "proxima",
    title: "Proxima",
    description: "Professional digital presentation platform.",
    longDescription:
      "Proxima is a professional digital product designed for structured presentation and brand identity.",
    category: "Design",
    tags: ["Branding", "UI/UX"],
    image: "/realisations/proxima-hero.png",
    gallery: ["/realisations/proxima-hero.png"],
    problem: "Need for strong visual identity and presentation.",
    solution: "Designed a structured and visually appealing brand system.",
    features: [
      "Visual identity system",
      "Clean layout structure",
      "Professional presentation assets",
    ],
    demoUrl: "/realisations/proxima.pdf",
    featured: true,
  },
  {
    id: "4",
    slug: "digitalcanvas",
    title: "DigitalCanvas",
    description: "Interactive digital web experience.",
    longDescription:
      "DigitalCanvas is an interactive web application designed for creativity and digital experiences.",
    category: "Web",
    tags: ["Interactive", "Creative", "Frontend"],
    image: "/realisations/digital-canvas-hero.png",
    gallery: ["/realisations/digital-canvas-hero.png"],
    problem: "Need for an engaging interactive web tool.",
    solution: "Built a responsive and interactive frontend-focused experience.",
    features: [
      "Interactive UI",
      "Responsive design",
      "Modern frontend architecture",
    ],
    demoUrl: "https://digitalcanvas.vercel.app/",
    featured: true,
  },
  {
    id: "5",
    slug: "ai-summerizer",
    title: "AI Summerizer",
    description: "AI-powered document summarization tool.",
    longDescription:
      "AI Summerizer is an AI tool designed to summarize long documents into concise insights using natural language processing.",
    category: "AI",
    tags: ["AI", "NLP", "Automation"],
    image: "/realisations/micropdf-hero.png",
    gallery: ["/realisations/micropdf-hero.png"],
    problem: "Users struggle to process long documents efficiently.",
    solution:
      "Implemented AI-based summarization to extract key insights quickly.",
    features: ["Text summarization", "AI-powered analysis", "Fast processing"],
    featured: true,
  },
  {
    id: "6",
    slug: "mohandisson",
    title: "Mohandisson",
    description: "Professional SaaS platform.",
    longDescription:
      "Mohandisson is a structured SaaS web application built for scalability and business workflows.",
    category: "SaaS",
    tags: ["SaaS", "Dashboard", "Web App"],
    image: "/realisations/mohandisson-hero.png",
    gallery: ["/realisations/mohandisson-hero.png"],
    problem: "Need for structured SaaS architecture.",
    solution: "Developed modular and scalable SaaS infrastructure.",
    features: [
      "Dashboard system",
      "User management",
      "Scalable backend structure",
    ],
    demoUrl: "https://app.mohandissoun.com/",
  },
  {
    id: "7",
    slug: "zappicon",
    title: "Zappicon",
    description: "Modern tech startup website.",
    longDescription:
      "Zappicon is a startup-oriented website focused on clarity, branding, and digital presence.",
    category: "Web",
    tags: ["Startup", "Landing Page"],
    image: "/realisations/zappicon-hero.png",
    gallery: ["/realisations/zappicon-hero.png"],
    problem: "Need for strong startup web presence.",
    solution: "Designed and built a modern, conversion-focused website.",
    features: ["Clean branding", "Conversion optimized", "Responsive layout"],
    demoUrl: "https://zappicon.com/",
    featured: true,
  },
  {
    id: "8",
    slug: "ai-defect-detection",
    title: "AI Defect Detection",
    description: "Computer vision system for defect detection.",
    longDescription:
      "AI Defect Detection is a machine learning system designed to identify product defects automatically.",
    category: "AI",
    tags: ["Computer Vision", "AI", "ML"],
    image: "/realisations/ddp-hero.png",
    gallery: ["/realisations/ddp-hero.png"],
    problem: "Manual inspection is slow and error-prone.",
    solution: "Implemented computer vision model for automated detection.",
    features: [
      "Automated defect detection",
      "Image processing pipeline",
      "ML model integration",
    ],
    featured: true,
  },
  {
    id: "9",
    slug: "thiqah",
    title: "Thiqah",
    description: "Professional corporate identity and branding project.",
    longDescription:
      "Thiqah represents a comprehensive branding and identity project designed to convey trust and professionalism.",
    category: "Design",
    tags: ["Branding", "Corporate Identity"],
    image: "/realisations/thiqah-hero.png",
    gallery: ["/realisations/thiqah-hero.png"],
    problem: "Need for a trustworthy corporate identity.",
    solution: "Created a cohesive and professional brand design language.",
    features: ["Brand guidelines", "Logo design", "Corporate assets"],
    demoUrl: "/realisations/thiqah.pdf",
    featured: true,
  },
  {
    id: "10",
    slug: "ncs-hack-website",
    title: "NCS Hack Website",
    description: "Official website for the NCS Hackathon event.",
    longDescription:
      "The NCS Hack Website serves as the central hub for the hackathon, managing registrations and information dissemination.",
    category: "Web",
    tags: ["Next.js", "Hackathon", "Event"],
    image: "/realisations/ncs-hack-hero.png",
    gallery: ["/realisations/ncs-hack-hero.png"],
    problem: "Centralized platform needed for hackathon management.",
    solution: "Developed an informative and functional event website.",
    features: [
      "Participant registration",
      "Event schedule",
      "Sponsor highlights",
    ],
    demoUrl: "https://ncs-hack.vercel.app/",
  },
  {
    id: "11",
    slug: "assurini",
    title: "Assurini",
    description: "Insurance services digital platform.",
    longDescription:
      "Assurini is a digital platform designed to streamline insurance services and customer interaction.",
    category: "SaaS",
    tags: ["Fintech", "Insurance", "Web App"],
    image: "/realisations/assurini-hero.png",
    gallery: ["/realisations/assurini-hero.png"],
    problem: "Insurance processes are often complex and offline.",
    solution: " digitized insurance workflows for better user accessibility.",
    features: ["Policy management", "Claim processing", "User dashboard"],
  },
  {
    id: "12",
    slug: "artist-calendar",
    title: "Artist Calendar",
    description: "Event scheduling tool for artists and creatives.",
    longDescription:
      "Artist Calendar helps creatives manage their bookings, events, and schedules in one place.",
    category: "Web",
    tags: ["Productivity", "Calendar", "React"],
    image: "/realisations/artist-calendar-hero.png",
    gallery: ["/realisations/artist-calendar-hero.png"],
    problem: "Artists struggle to manage scattered schedules.",
    solution: "Created a dedicated calendar tool for creative professionals.",
    features: ["Event booking", "Schedule management", "Portfolio integration"],
  },
  {
    id: "13",
    slug: "cge",
    title: "CGE",
    description: "Corporate website for General Energy Company.",
    longDescription:
      "CGE's website showcases their energy solutions, projects, and corporate values.",
    category: "Web",
    tags: ["Corporate", "Energy", "Next.js"],
    image: "/realisations/cge-hero.png",
    gallery: ["/realisations/cge-hero.png"],
    problem: "Need for a modern corporate web presence.",
    solution: "Built a professional corporate website with comprehensive info.",
    features: ["Project showcase", "Service listing", "Corporate info"],
    demoUrl: "https://general-energy-company-mxcu.vercel.app/",
  },
  {
    id: "14",
    slug: "enigma",
    title: "Enigma",
    description: "Mysterious interactive web experience.",
    longDescription:
      "Enigma offers users a unique, interactive journey through a series of web-based puzzles and challenges.",
    category: "Web",
    tags: ["Interactive", "Puzzle", "Creative"],
    image: "/realisations/enigma-hero.png",
    gallery: ["/realisations/enigma-hero.png"],
    problem: "Creating an engaging digital puzzle experience.",
    solution: "Developed an immersive interactive web application.",
    features: ["Interactive puzzles", "Immersive design", "Game logic"],
    demoUrl: "https://enigma-sand-seven.vercel.app/",
  },
  {
    id: "15",
    slug: "ai-nutrition-helper",
    title: "AI Nutrition Helper",
    description: "AI-based personalized nutrition advice.",
    longDescription:
      "AI Nutrition Helper uses artificial intelligence to analyze dietary habits and suggest personalized nutrition plans.",
    category: "AI",
    tags: ["AI", "Health", "Nutrition"],
    image: "/realisations/kalb-el-louz-hero.png",
    gallery: ["/realisations/kalb-el-louz-hero.png"],
    problem: "Personalized nutrition advice is expensive and inaccessible.",
    solution: "Used AI to democratize access to nutritional guidance.",
    features: ["Diet analysis", "Meal planning", "Health tracking"],
    demoUrl: "https://enigma-sand-seven.vercel.app/",
  },
  {
    id: "16",
    slug: "micro-hack-2",
    title: "Micro Hack 2.0 Website",
    description:
      "Website for the second edition of Micro Hack an IT hackathon.",
    longDescription:
      "Dedicated event website for Micro Hack 2.0, facilitating participant interaction and information.",
    category: "Web",
    tags: ["Hackathon", "Event", "Community"],
    image: "/realisations/mchack2.png",
    gallery: ["/realisations/mchack2.png"],
    problem: "Managing a large scale hackathon event.",
    solution: "Deployed a scalable event website for registration and info.",
    features: ["Hackathon workflow", "Team registration", "Live updates"],
    demoUrl: "https://microhack.microclub.info/",
  },
  {
    id: "17",
    slug: "portfolios",
    title: "Portfolios",
    description: "We can build your portfolio website.",
    longDescription:
      "Personal portfolio website for a content creator, A showcase of skills, projects, and professional journey.",
    category: "Design",
    tags: ["Portfolio", "Personal", "Dev"],
    image: "/realisations/portfolios.png",
    gallery: ["/realisations/portfolios.png"],
    problem: "Showcasing personal work effectively.",
    solution: "Designed a clean, project-focused personal portfolio.",
    features: ["Project gallery", "About section", "Contact form"],
    demoUrl: "https://ramzykemmoun.space/",
  },
  {
    id: "18",
    slug: "nightbyte-website",
    title: "Nightbyte Website",
    description: "Official website for the Nightbyte tech community.",
    longDescription:
      "Nightbyte's website serves as a community hub for tech enthusiasts, featuring events and resources.",
    category: "Web",
    tags: ["Community", "Tech", "Next.js"],
    image: "/realisations/nightbyte.png",
    gallery: ["/realisations/nightbyte.png"],
    problem: "Building a digital home for a tech community.",
    solution: "Created a vibrant community website with event features.",
    features: ["Community news", "Event calendar", "Member showcase"],
    demoUrl: "https://www.nightbyte.space/",
  },
  {
    id: "19",
    slug: "myworkflow",
    title: "MyWorkflow",
    description: "Productivity and workflow management tool.",
    longDescription:
      "MyWorkflow helps users streamline their daily tasks and optimize their productivity processes.",
    category: "SaaS",
    tags: ["Productivity", "Workflow", "SaaS"],
    image: "/realisations/mywkfl.png",
    gallery: ["/realisations/mywkfl.png"],
    problem: "Inefficient personal and team workflow management.",
    solution: "Built a customizable workflow automation tool.",
    features: ["Task management", "Process automation", "Efficiency analytics"],
  },
  {
    id: "20",
    slug: "geni-ocr",
    title: "Geni OCR",
    description: "Optical Character Recognition solution.",
    longDescription:
      "Geni OCR extracts text from images and documents with high accuracy using advanced machine learning.",
    category: "AI",
    tags: ["AI", "OCR", "Machine Learning"],
    image: "/realisations/geni-ocr.png",
    gallery: ["/realisations/geni-ocr.png"],
    problem: "Data entry from physical documents is tedious.",
    solution: "Implemented automated OCR for instant text extraction.",
    features: [
      "Text extraction",
      "Document scanning",
      "Multi-language support",
    ],
  },

  {
    id: "21",
    slug: "upmate",
    title: "Upmate",
    description: "Your startup's first teammate",
    longDescription:
      "From idea to pitch deck Upmate helps you brainstorm, validate, and visualize your startup with AI-powered tools built for founders.",
    category: "SaaS",
    tags: ["AI", "Startup", "SaaS"],
    image: "/realisations/upmate.png",
    gallery: ["/realisations/upmate.png"],
    problem: "Many founders struggle to turn ideas into viable startups.",
    solution:
      "Upmate provides AI-powered tools to help founders brainstorm, validate, and visualize their startups.",
    features: [
      "AI-powered brainstorming",
      "Market validation",
      "Pitch deck generation",
    ],
    demoUrl: "https://upmate-x.vercel.app/",
  },

  {
    id: "22",
    slug: "collab-ted",
    title: "CollabTED",
    description: "Your ultimate collaboration platform",
    longDescription:
      "CollabTed is your ultimate collaboration platform, designed to simplify teamwork and boost productivity. From managing tasks and improving communication to staying organized, we provide intuitive tools to help teams achieve more together.",
    category: "SaaS",
    tags: ["Startup", "SaaS", "Development"],
    image: "/realisations/collab-ted.png",
    gallery: ["/realisations/collab-ted.png"],
    problem: "Many teams struggle to collaborate effectively.",
    solution:
      "CollabTed provides intuitive tools to help teams collaborate more effectively.",
    features: ["Task management", "Communication", "Organization"],
  },
  {
    id: "23",
    slug: "jethings",
    title: "Jethings",
    description: "Run Your Entire Business in One Smart System",
    longDescription:
      "Simple enough for any team. Powerful enough to manage stock, process sales and track performance in real time.",
    category: "Web",
    tags: ["Startup", "SaaS", "Development"],
    image: "/realisations/jethings.png",
    gallery: ["/realisations/jethings.png"],
    problem:
      "Many teams struggle to manage stock, process sales and track performance in real time.",
    solution:
      "Jethings provides intuitive tools to help teams manage stock, process sales and track performance in real time.",
    features: ["Stock management", "Sales processing", "Performance tracking"],
    demoUrl: "https://www.jethings.com/",
  },

  {
    id: "24",
    slug: "task-board",
    title: "Task Board",
    description:
      "A web application for managing tasks and projects with an intuitive interface, offering features like task assignment, progress tracking, and collaboration.",
    longDescription:
      "This Task Board Management web app is designed to streamline project management. It helps users organize tasks, assign responsibilities, and track progress efficiently",
    category: "Web",
    tags: ["Startup", "SaaS", "Development"],
    image: "/realisations/taskboard.png",
    gallery: [
      "/realisations/taskboard.png",
      "/realisations/taskboard-1.png",
      "/realisations/taskboard-2.png",
    ],
    problem:
      "Many teams struggle to manage tasks and projects efficiently, leading to missed deadlines and poor communication.",
    solution:
      "This Task Board Management web app is designed to streamline project management. It helps users organize tasks, assign responsibilities, and track progress efficiently",
    features: ["Task management", "Project management", "Progress tracking"],
  },

  {
    id: "25",
    slug: "carhub",
    title: "Car Hub",
    description:
      "CarHub is a car rental platform that allows users to rent cars from different rental companies.",
    longDescription:
      "CarHub is a car rental platform that allows users to rent cars from different rental companies. It provides a seamless and user-friendly experience for car rentals, with a wide range of vehicles to choose from. Users can easily search, compare, and book cars that meet their needs, with transparent pricing and flexible rental options. CarHub also offers features like vehicle tracking, maintenance management, and customer support to ensure a hassle-free car rental experience.",
    category: "Web",
    tags: ["Startup", "SaaS", "Development"],
    image: "/realisations/carhub.png",
    gallery: ["/realisations/carhub.png"],
    problem:
      "Car rental companies struggle to manage their fleets and bookings, leading to inefficiencies and poor customer experience.",
    solution:
      "CarHub provides a seamless and user-friendly experience for car rentals, with a wide range of vehicles to choose from. Users can easily search, compare, and book cars that meet their needs, with transparent pricing and flexible rental options. CarHub also offers features like vehicle tracking, maintenance management, and customer support to ensure a hassle-free car rental experience.",
    features: [
      "Vehicle tracking",
      "Maintenance management",
      "Customer support",
    ],
    demoUrl: "https://car-catalogue-app-sigma.vercel.app/",
  },
  {
    id: "26",
    slug: "shift",
    title: "Shift",
    description:
      "L'innovation n'est plus un hasard. Transformez vos signaux en décisions stratégiques grâce au premier OS de gestion de l'innovation certifié ISO 56002.",
    longDescription:
      "L'innovation n'est plus un hasard. Transformez vos signaux faibles en décisions stratégiques grâce au premier OS de gestion de l'innovation certifié ISO 56002. Structurez vos idées, pilotez vos initiatives et déployez une culture d'innovation alignée sur la norme internationale ISO 56002.",
    category: "SaaS",
    tags: ["Startup", "SaaS", "Development"],
    image: "/realisations/shift.png",
    gallery: [
      "/realisations/shift.png",
      "/realisations/shift-1.png",
      "/realisations/shift-2.png",
      "/realisations/shift-3.png",
      "/realisations/shift-4.png",
    ],
    problem:
      "Les entreprises collectent des idées, des signaux faibles et des opportunités, mais manquent de structure, de visibilité et de méthode pour les transformer en décisions stratégiques mesurables. L'innovation reste fragmentée, non pilotée et difficilement alignée avec les standards internationaux.",

    solution:
      "Un OS complet de gestion de l'innovation certifié ISO 56002, permettant de centraliser les idées, structurer les processus, mesurer la performance et aligner l'innovation avec la stratégie d'entreprise.",

    features: [
      "Collecte et centralisation des idées et signaux faibles",
      "Workflow structuré conforme à la norme ISO 56002",
      "Gestion des portefeuilles projets innovants",
    ],
  },

  {
    id: "27",
    slug: "kanban",
    title: "Kanban",
    description:
      "Manage your tasks smarter. Organisez, priorisez et optimisez votre workflow grâce à un Kanban intelligent propulsé par l'IA.",
    longDescription:
      "Kanban est une plateforme SaaS moderne de gestion de tâches qui combine la simplicité du Kanban avec la puissance de l'intelligence artificielle. Créez vos boards, organisez vos tâches et laissez l'IA analyser vos priorités, détecter les blocages et optimiser votre productivité en temps réel.",

    category: "SaaS",
    tags: ["Productivity", "AI", "Kanban", "Task Management"],

    image: "/realisations/kanban.png",

    gallery: ["/realisations/kanban.png"],

    problem:
      "Les équipes perdent du temps à gérer leurs tâches manuellement, manquent de visibilité sur les priorités et ont du mal à identifier les blocages ou les retards avant qu'ils n'impactent la performance.",

    solution:
      "Une plateforme Kanban intelligente qui centralise les tâches, automatise l'organisation via l'IA, suggère des priorités, détecte les retards et fournit des insights en temps réel pour améliorer la productivité.",

    features: [
      "Boards Kanban dynamiques avec drag & drop",
      "Priorisation automatique des tâches via IA",
      "Détection intelligente des blocages",
    ],
  },
  {
    id: "28",
    slug: "jaggy-store",
    title: "Jaggy Store",
    description: "Boutique en ligne moderne de vêtements tendance.",
    longDescription:
      "Jaggy Store est une plateforme e-commerce complète dédiée à la mode contemporaine, offrant une expérience d'achat fluide et élégante aux utilisateurs.",
    category: "Web",
    tags: ["E-commerce", "React", "Next.js", "Tailwind"],
    image: "/realisations/jaggy-hero.png",
    gallery: ["/realisations/jaggy-hero.png"],
    problem:
      "Besoin d'une boutique en ligne performante pour une marque de vêtements en pleine croissance.",
    solution:
      "Développement d'un site e-commerce avec tunnel d'achat optimisé et gestion simplifiée des stocks.",
    features: [
      "Catalogue de produits dynamique",
      "Système de panier et commande sécurisé",
      "Interface responsive haute performance",
      "Gestion des stocks en temps réel",
    ],
  },
  {
    id: "29",
    slug: "crazy-foot",
    title: "Crazy Foot",
    description:
      "La destination ultime pour les passionnés de maillots de football.",
    longDescription:
      "Crazy Foot est un site spécialisé dans la vente de maillots de football authentiques et de collection, conçu pour les fans exigeants cherchant la qualité et l'exclusivité.",
    category: "Web",
    tags: ["E-commerce", "Next.js", "Soccer", "Retail"],
    image: "/realisations/crazyfoot-hero.png",
    gallery: ["/realisations/crazyfoot-hero.png"],
    problem:
      "Difficulté pour les fans de trouver des maillots spécifiques avec une expérience d'achat sécurisée.",
    solution:
      "Une plateforme dédiée avec filtres avancés par ligue, club et saison pour une recherche rapide.",
    features: [
      "Filtres par équipe et saison",
      "Personnalisation optionnelle des maillots",
      "Paiement sécurisé et rapide",
      "Suivi de commande intégré",
    ],
  },
  {
    id: "30",
    slug: "magficon-landing",
    title: "Magficon Landing Page",
    description: "Site vitrine premium pour une banque d'icônes business.",
    longDescription:
      "Une landing page captivante conçue pour présenter les packs d'icônes Magficon, mettant en avant la qualité et la diversité du design pour les professionnels.",
    category: "Design",
    tags: ["Landing Page", "UI/UX", "Resources"],
    image: "/realisations/magficon-landing-hero.png",
    gallery: ["/realisations/magficon-landing-hero.png"],
    problem:
      "Besoin d'une présentation percutante pour vendre des ressources graphiques premium.",
    solution:
      "Design minimaliste et animations fluides pour valoriser le produit visuel et augmenter les conversions.",
    features: [
      "Showcase interactif d'icônes",
      "Section de prix claire et structurée",
      "Optimisation SEO pour le design",
      "Performance de chargement exceptionnelle",
    ],
  },
  {
    id: "31",
    slug: "magficon-search",
    title: "Magficon Search",
    description:
      "Moteur de recherche et plateforme de personnalisation d'icônes.",
    longDescription:
      "Magficon Search est une plateforme interactive permettant aux designers de trouver, personnaliser les couleurs et les styles en direct, puis télécharger des icônes sur mesure.",
    category: "SaaS",
    tags: ["SaaS", "Tool", "Design", "Productivity"],
    image: "/realisations/magficon-search-hero.png",
    gallery: ["/realisations/magficon-search-hero.png"],
    problem:
      "Les designers perdent trop de temps à recolorer manuellement les icônes téléchargées.",
    solution:
      "Intégration d'un éditeur SVG en direct pour ajuster les styles avant le téléchargement immédiat.",
    features: [
      "Recherche par mots-clés avancée",
      "Personnalisation des couleurs en direct",
      "Export multi-formats (SVG, PNG, PDF)",
      "Gestion de collections personnelles",
    ],
  },
  {
    id: "32",
    slug: "joptic",
    title: "Joptic",
    description:
      "Dashboard de gestion de stock pour le réseau national de lunetterie.",
    longDescription:
      "Une solution SaaS robuste pour la gestion centralisée des stocks de lunettes à l'échelle nationale, facilitant la logistique et le réapprovisionnement des opticiens.",
    category: "SaaS",
    tags: ["SaaS", "Dashboard", "Inventory", "Health"],
    image: "/realisations/joptic-hero.png",
    gallery: ["/realisations/joptic-hero.png"],
    problem:
      "Manque de visibilité globale sur les stocks de lunettes au niveau national.",
    solution:
      "Dashboard analytique en temps réel avec alertes de stock bas et suivi précis des ventes.",
    features: [
      "Gestion multi-sites centralisée",
      "Statistiques de vente détaillées",
      "Alertes de stock automatisées",
      "Interface de gestion simplifiée",
    ],
  },
  {
    id: "33",
    slug: "qarini",
    title: "Qarini",
    description: "Plateforme d'e-learning interactive pour tous les niveaux.",
    longDescription:
      "Qarini est un écosystème d'apprentissage complet permettant aux formateurs et aux étudiants de collaborer efficacement à distance grâce à des outils pédagogiques modernes.",
    category: "Web",
    tags: ["Education", "LMS", "E-learning", "React"],
    image: "/realisations/qarini-hero.png",
    gallery: ["/realisations/qarini-hero.png"],
    problem:
      "Besoin d'une solution d'apprentissage structurée et accessible partout pour les apprenants.",
    solution:
      "Plateforme LMS avec gestion de cours vidéo, exercices interactifs et suivi complet de progression.",
    features: [
      "Cours vidéo et ressources PDF",
      "Quiz et évaluations interactives",
      "Tableau de bord étudiant personnalisé",
      "Espace instructeur dédié à la gestion",
    ],
  },
];

export const getAllProjects = () => projects;

export const getProjectsBySlugs = (slugs: string[]) =>
  slugs.map(getProjectBySlug);
export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug)!;
};

export const getProjectsByCategory = (category: ProjectCategory) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};
