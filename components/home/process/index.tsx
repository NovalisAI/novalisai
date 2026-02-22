"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Search, FileText, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Define goals, constraints, and success metrics.",
    icon: Search,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    description: "Roadmap, timeline, milestones, and budget options.",
    icon: FileText,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    number: "03",
    title: "Build & Iterate",
    description: "Weekly demos, QA, clean code, documentation.",
    icon: Code2,
    color: "bg-primary/10 text-primary",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deployment, monitoring, improvements based on real usage.",
    icon: Rocket,
    color: "bg-green-500/10 text-green-500",
  },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-16 md:mb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-2 font-bold mb-4"
        >
          A clear process. No surprises.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-6 text-muted-foreground max-w-2xl"
        >
          Built for speed, clarity, and dependable delivery.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col items-start group hover:border-primary/30 transition-all duration-300"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
            >
              <step.icon className="w-6 h-6" />
            </div>

            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
              Step {step.number}
            </span>

            <h3 className="text-xl font-bold mb-3">{step.title}</h3>

            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Button
          asChild
          className="px-16 h-14 rounded-full bg-primary text-background font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          <Link href="/contact" className="flex items-center gap-2">
            Book a 20-min Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
