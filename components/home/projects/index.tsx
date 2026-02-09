import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail?: string;
  icon: string;
}

export default function Projects() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className="heading-2 font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="heading-6 mb-4 text-center text-muted-foreground max-w-150">
          Showcase of our most impactful work across various industries and
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Zappicon Library",
    description:
      "A comprehensive icon library with 22,000+ icons across 28 categories, supporting multiple formats and styles.",
    category: "Design System",
    icon: "/assets/grid-category.svg",
  },
  {
    id: 2,
    title: "Enterprise Platform",
    description:
      "Full-stack web application enabling seamless business operations and digital transformation workflows.",
    category: "Web Development",
    icon: "/assets/building-zappicon.png",
  },
  {
    id: 3,
    title: "AR Training Simulation",
    description:
      "Immersive augmented reality solution for employee training and skill development in manufacturing.",
    category: "VR/AR",
    icon: "/assets/cube-simple-zappicon.svg",
  },
  {
    id: 4,
    title: "AI-Powered Analytics",
    description:
      "Machine learning solution providing real-time insights and predictive analytics for business intelligence.",
    category: "Artificial Intelligence",
    icon: "/assets/chart-pie-simple-zappicon.png",
  },
  {
    id: 5,
    title: "Mobile App Suite",
    description:
      "Cross-platform mobile applications delivering exceptional user experiences on iOS and Android.",
    category: "Mobile Development",
    icon: "/assets/mobile-device.svg",
  },
  {
    id: 6,
    title: "Digital Marketplace",
    description:
      "E-commerce platform connecting sellers and buyers with secure payments and real-time inventory management.",
    category: "E-Commerce",
    icon: "/assets/basket-shopping-zappicon.png",
  },
];
