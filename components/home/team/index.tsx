import React from "react";
import TeamCard from "./TeamCard";
import { TeamMember } from "@/types";

export default function Team() {
  return (
    <div className="py-24">
      <div className="flex flex-col items-center justify-center mb-24">
        <h2 className="heading-2 font-bold mb-4 text-center">Meet Our Team</h2>
        <p className="heading-6 mb-4 text-center text-muted-foreground max-w-150">
          Talented professionals dedicated to creating exceptional tools and
          experiences for designers and developers worldwide.
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
    name: "Sarah Johnson",
    role: "Lead Designer",
    bio: "Creative visionary with 8+ years of experience in icon design and UI systems. Leads the design direction and ensures visual excellence across all projects.",
  },
  {
    id: 2,
    name: "Alex Chen",
    role: "Technical Lead",
    bio: "Full-stack developer passionate about creating seamless integrations. Ensures Zappicon works perfectly across all platforms and frameworks.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Product Manager",
    bio: "Strategic thinker focused on user needs and market trends. Guides product development and helps our community succeed with Zappicon.",
  },
  {
    id: 4,
    name: "Marcus Rodriguez",
    role: "Developer Relations",
    bio: "Bridges the gap between our team and the community. Provides support, builds integrations, and ensures developers have everything they need.",
  },
];
