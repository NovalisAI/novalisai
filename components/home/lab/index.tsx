"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlaskConical, Battery, Sun, Brain, ArrowRight } from "lucide-react";

const labProjects = [
  {
    title: "BESS Optimization",
    subtitle: "(Prototype)",
    description: "Battery dispatch strategy under constraints and uncertainty.",
    status: "Prototype / Research",
    icon: Battery,
    color: "from-orange-500/20 to-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    title: "Solar Site Planning",
    subtitle: "(Concept)",
    description: "Geospatial mapping to optimize placement and coverage.",
    status: "Concept / Modeling",
    icon: Sun,
    color: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-500",
  },
  {
    title: "Decision Intelligence",
    subtitle: "(Prototype)",
    description: "Data-driven decision support for operations and planning.",
    status: "Prototype",
    icon: Brain,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
  },
];

export default function InnovationLab() {
  return (
    <section className="py-24 relative">
      <div className="flex flex-col items-center text-center mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
        >
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Research & Development</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 font-bold mb-4"
        >
          Innovation Lab{" "}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-6 text-muted-foreground max-w-2xl"
        >
          We prototype optimization and applied analytics for high-impact
          industry use cases.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto mb-16">
        {labProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group p-8 rounded-[32px] bg-gradient-to-br ${project.color} border border-foreground/10 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col h-full`}
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <project.icon className="w-32 h-32 -rotate-12 translate-x-8 -translate-y-8" />
            </div>

            <div
              className={`w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-md border border-white/5 flex items-center justify-center mb-8 ${project.iconColor} shadow-xl`}
            >
              <project.icon className="w-7 h-7" />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
                {project.title}
                <span className="text-sm font-medium text-muted-foreground">
                  {project.subtitle}
                </span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                  Status
                </span>
                <span className="text-xs font-semibold text-foreground/80">
                  {project.status}
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="flex justify-center px-6"
      >
        <Button
          asChild
          variant="outline"
          className="h-14 px-10 rounded-full border-primary/20 bg-primary/5 hover:bg-primary hover:text-white transition-all duration-300 font-bold group"
        >
          <Link href="/contact" className="flex items-center gap-2">
            Discuss a Lab Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
