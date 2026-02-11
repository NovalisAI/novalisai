"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CategoryFilter } from "@/components/projects/CategoryFilter";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  projects,
  ProjectCategory,
  getProjectsByCategory,
} from "@/lib/projects";

const categories: ProjectCategory[] = [
  "All",
  "Web",
  "AI",
  "Mobile",
  "SaaS",
  "Design",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-secondary/30 to-background z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
          >
            Our <span className="text-primary">Projects</span> Showcase
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our portfolio of digital experiences, where design meets
            technology to solve real-world problems.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-6 pb-24 md:pb-32 max-w-7xl mx-auto">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                layoutId={`project-${project.id}`}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </section>
    </div>
  );
}
