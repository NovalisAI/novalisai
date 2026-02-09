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
        <h2 className="heading-2 font-bold mb-4 text-center">What We Do</h2>
        <p className="heading-6 mb-4 text-center text-muted-foreground max-w-150">
          We specialize in designing and developing innovative solutions across
          multiple domains, empowering businesses to succeed in the digital era.
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
    title: "Development",
    description:
      "Custom software development and web applications built with modern technologies and best practices.",
    icon: "/assets/browser-terminal-zappicon.png",
  },
  {
    id: 2,
    title: "Enterprise Digitalization",
    description:
      "Transform your business operations with comprehensive digital solutions tailored to enterprise needs.",
    icon: "/assets/building-zappicon.png",
  },
  {
    id: 3,
    title: "VR Simulations",
    description:
      "Immersive virtual reality experiences designed to train, educate, and engage users in innovative ways.",
    icon: "/assets/cube-simple-zappicon.png",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "Cutting-edge AI solutions that leverage machine learning to automate and optimize business processes.",
    icon: "/assets/sparkles-zappicon.png",
  },
  {
    id: 5,
    title: "Platform Solutions",
    description:
      "Scalable platforms designed to solve complex challenges and drive growth across industries.",
    icon: "/assets/grid-four-zappicon.png",
  },
];
