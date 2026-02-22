import React from "react";
import TeamCard from "./TeamCard";
import { TeamMember } from "@/types";

export default function Team() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className="heading-2 font-bold mb-4 text-center">
          A lean core team <br /> backed by a curated network
        </h2>
        <p className="heading-6 mb-4 text-center text-muted-foreground max-w-150">
          We combine a core delivery team with vetted specialists, so we can
          scale fast while keeping quality and timelines under control.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Achraf Saidi",
    role: "Lead Designer",
    bio: "Creative visionary with 8+ years of experience in icon design and UI systems. Leads the design direction and ensures visual excellence across all projects.",
  },
  {
    id: 2,
    name: "Ramzy Kemmoun",
    role: "Technical Lead",
    bio: "Full-stack developer passionate about creating seamless integrations. Ensures NovalisAI works perfectly across all platforms and frameworks.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Product Manager",
    bio: "Strategic thinker focused on user needs and market trends. Guides product development and helps our community succeed with NovalisAI.",
  },
  {
    id: 4,
    name: "Marcus Rodriguez",
    role: "Developer Relations",
    bio: "Bridges the gap between our team and the community. Provides support, builds integrations, and ensures developers have everything they need.",
  },
];
