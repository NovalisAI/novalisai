"use client";

import Image from "next/image";

interface Domain {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function DomainCard({ domain }: { domain: Domain }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="mb-6 w-20 h-20 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <Image
          src={domain.icon}
          alt={domain.title}
          width={40}
          height={40}
          className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
        />
      </div>
      <h4 className="heading-5 font-bold mb-3">{domain.title}</h4>
      <p className="heading-6 text-muted-foreground leading-relaxed">
        {domain.description}
      </p>
    </div>
  );
}
