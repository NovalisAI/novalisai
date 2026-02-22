import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectShowcase from "./ProjectShowcase";

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
      <ProjectShowcase />
    </div>
  );
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NovalisAI Library",
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
    icon: "/assets/building-NovalisAI.png",
  },
  {
    id: 3,
    title: "AR Training Simulation",
    description:
      "Immersive augmented reality solution for employee training and skill development in manufacturing.",
    category: "VR/AR",
    icon: "/assets/cube-simple-NovalisAI.svg",
  },
  {
    id: 4,
    title: "AI-Powered Analytics",
    description:
      "Machine learning solution providing real-time insights and predictive analytics for business intelligence.",
    category: "Artificial Intelligence",
    icon: "/assets/chart-pie-simple-NovalisAI.png",
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
    icon: "/assets/basket-shopping-NovalisAI.png",
  },
];
