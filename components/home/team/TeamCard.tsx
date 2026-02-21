"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <Avatar className="w-32 h-32 border-4 border-accent">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="heading-2 bg-primary text-surface">
            {member.name
              .split(" ")
              .map((n) => n.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
      <h4 className="heading-5 font-bold mb-2">{member.name}</h4>
      <p className="text-primary font-semibold mb-4 heading-6">{member.role}</p>
      <p className="heading-6 text-muted-foreground leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
}
