import React from "react";
import ProjectType from "./ProjectItem";
import { Project, Value } from "@/types";

export default function Values() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="heading-2 font-bold mb-4 text-center">
          Fully Compatible
        </h2>
        <p className="heading-6 mb-12 text-center lg:max-w-150">
          To simplify your creative journey, NovalisAI Library offers the
          perfect integration for your digital projects.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectType key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export const projects: Project[] = [
  {
    title: "Figma Users",
    icon: "/assets/figma-line.svg",
    description: "Seamless Figma integration with full Variants support.",
  },
  {
    title: "All Types Of Devices",
    icon: "/assets/desktop-check-circle.svg",
    description: "Ready to use on any device, from desktop to mobile.",
  },
  {
    title: "RTL Users",
    icon: "/assets/paragraph-left.svg",
    description: "Fully supports RTL like Arabic and Persian.",
  },
  {
    title: "Dark Mode",
    icon: "/assets/moon.svg",
    description: "Carefully Crafted to support dark mode.",
  },
];

export const values: Value[] = [
  {
    title: "Modern, Unified Design",
    description:
      "Harmony in lines, strokes, and radius, making the project cohesive.",
    icon: "/assets/cube-simple-NovalisAI.svg",
  },
  {
    title: "Easy To Use",
    description: "Easy to access, resize, and customize colors.",
    icon: "/assets/screen-cursor-NovalisAI.svg",
  },
  {
    title: "Performance Optimization",
    description: "Optimized icons for performance and fast loading.",
    icon: "/assets/speedometer-NovalisAI.svg",
  },
  {
    title: "Smart Subcategories",
    description: "Smart subcategories organized for easy access to icons.",
    icon: "/assets/list-tree-NovalisAI.svg",
  },
  {
    title: "Save Time And Effort",
    description:
      "Everything is carefully organized, focus only on your projects!",
    icon: "/assets/hourglass-clock-NovalisAI.svg",
  },
  {
    title: "Flexible Licenses",
    description: "Very simple licenses for both paid and free use.",
    icon: "/assets/memos-NovalisAI.svg",
  },
  {
    title: "Fast Support",
    description: "Fast and continuous 24/7 support via from or website.",
    icon: "/assets/chat-dots-bolt-NovalisAI.svg",
  },
  {
    title: "Lifetime Updates",
    description: "Lifetime free updates, always at the latest level.",
    icon: "/assets/time-backward-NovalisAI.svg",
  },
];
