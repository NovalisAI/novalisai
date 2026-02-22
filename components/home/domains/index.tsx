import React from "react";
import DomainCard from "./DomainCard";

interface Domain {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function Domains() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className="heading-2 font-bold mb-4 text-center">What we build</h2>
        <p className="heading-6 mb-4 text-center text-muted-foreground max-w-150">
          End-to-end delivery: software, AI integration, and scalable platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {domains.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </div>
    </div>
  );
}

export const domains: Domain[] = [
  {
    id: 1,
    title: "Custom Development",
    description:
      "Web apps, dashboards, portals, and SaaS platforms built for performance and scale.",
    icon: "/assets/dev.svg",
  },
  {
    id: 2,
    title: "SME Digitalization",
    description:
      "Internal tools for operations: planning, reporting, HR, finance, workflows.",
    icon: "/assets/digital.svg",
  },
  {
    id: 3,
    title: "AI Integration",
    description:
      "AI automation, assistants, document processing, intelligent search integrated into your tools.",
    icon: "/assets/ai-integration.svg",
  },
  {
    id: 4,
    title: "Data & Analytics",
    description:
      "KPIs, dashboards, forecasting, pipelines turn data into decisions",
    icon: "/assets/data.svg",
  },
  {
    id: 5,
    title: "Platform & Cloud",
    description:
      "APIs, authentication, roles & permissions, cloud deployment, monitoring, maintenance",
    icon: "/assets/cloud-plateform.svg",
  },
];
