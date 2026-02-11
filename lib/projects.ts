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
    slug: "timeline-health",
    title: "Timeline Health",
    description:
      "Building a seamless path to better cellular health with real-time analytics.",
    longDescription:
      "Timeline Health revolutionizes how users track and improve their wellness journey through intuitive interfaces and real-time analytics. We built a comprehensive platform that integrates with wearable devices to provide actionable health insights.",
    category: "Web",
    tags: ["React", "Next.js", "HealthTech", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
    ],
    problem:
      "Users struggled to understand complex cellular health data from raw lab reports.",
    solution:
      "We developed an intuitive dashboard that visualizes complex biological markers in simple, understandable trends using D3.js and React.",
    features: [
      "Real-time health monitoring dashboard",
      "Integration with Apple Health & Google Fit",
      "AI-driven personalized recommendations",
      "Secure medical data encryption",
    ],
    results:
      "Increased user retention by 45% and improved daily active usage by 3x within 3 months.",
    featured: true,
  },
  {
    id: "2",
    slug: "siesta-campers",
    title: "Siesta Campers",
    description:
      "Elevating Portugal's premier van rental experience with a modern booking engine.",
    longDescription:
      "Siesta Campers needed a digital transformation to match their premium physical service. We rebuilt their booking engine from the ground up, focusing on conversion optimization and mobile responsiveness for travelers on the go.",
    category: "Web",
    tags: ["Next.js", "E-commerce", "Travel", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
    ],
    problem:
      "The legacy booking system was slow, not mobile-friendly, and had a high drop-off rate.",
    solution:
      "We implemented a custom, high-performance booking flow using Next.js and a headless CMS, optimizing for speed and ease of use.",
    features: [
      "Custom date-picker with availability logic",
      "Interactive van customization",
      "Seamless Stripe payment integration",
      "Automated email logistical workflows",
    ],
    results: "Booking conversion rate increased by 60% in the first season.",
    featured: true,
  },
  {
    id: "3",
    slug: "neural-architect",
    title: "Neural Architect",
    description:
      "AI-powered architectural design assistant for rapid prototyping.",
    longDescription:
      "Neural Architect helps architects and designers generate floor plans and 3D volume studies in seconds using generative AI. It serves as a co-pilot for the early design phase.",
    category: "AI",
    tags: ["Python", "TensorFlow", "React", "WebGL"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493195671595-30a332807d65?w=1200&h=800&fit=crop",
    ],
    problem: "Early stage prototyping is time-consuming and often repetitive.",
    solution:
      "We trained a GAN model on thousands of architectural plans to suggest layout optimizations and generate variations instantly.",
    features: [
      "Generative floor plan creation",
      "3D volumetric visualization in browser",
      "Export to CAD/BIM formats",
      "Style transfer for rendering",
    ],
    results: "Reduced initial concept phase time by 70% for pilot firms.",
    featured: true,
  },
  {
    id: "4",
    slug: "fintech-flow",
    title: "Fintech Flow",
    description: "Modern SaaS dashboard for enterprise financial management.",
    longDescription:
      "Fintech Flow is a comprehensive SaaS solution for enterprise finance teams. It aggregates data from multiple banking APIs to provide a unified view of cash flow and expenses.",
    category: "SaaS",
    tags: ["Vue.js", "Dashboard", "Fintech", "Security"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-adf4e565db10?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop",
    ],
    problem:
      "Enterprises lack a centralized real-time view of their fragmented banking relationships.",
    solution:
      "We built a secure, aggregated dashboard that connects to 50+ banking APIs to normalize and visualize financial data.",
    features: [
      "Multi-bank API aggregation",
      "Automated reconciliation",
      "Predictive cash flow modeling",
      "Role-based access control",
    ],
  },
  {
    id: "5",
    slug: "smart-home-hub",
    title: "Smart Home Hub",
    description:
      "Mobile application for controlling IoT devices with voice commands.",
    longDescription:
      "A unified mobile app that connects disparate smart home devices into a single interface. Users can create automation routines and control devices via voice or touch.",
    category: "Mobile",
    tags: ["React Native", "IoT", "Mobile", "UX"],
    image:
      "https://images.unsplash.com/photo-1558002038-1091a1661116?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558002038-1091a1661116?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1585144463428-1b22e1b9b999?w=1200&h=800&fit=crop",
    ],
    problem: "Smart home devices operate in silos with different apps.",
    solution:
      "We created a universal controller app that bridges different protocols (Zigbee, Z-Wave, WiFi) into one simple UX.",
    features: [
      "Universal device compatibility",
      "Voice command integration",
      "Geofencing automation",
      "Energy usage analytics",
    ],
  },
];

export const getAllProjects = () => projects;

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: ProjectCategory) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};
