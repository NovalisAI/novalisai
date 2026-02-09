"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail?: string;
  icon: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-border overflow-hidden group">
      <CardContent className="p-0">
        {project.thumbnail ? (
          <div className="relative w-full h-40 bg-accent overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="relative w-full h-40 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
            <Image
              src={project.icon}
              alt={project.title}
              width={60}
              height={60}
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="heading-5 font-bold">{project.title}</h4>
          </div>
          <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">
            {project.category}
          </p>
          <p className="heading-6 text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
