import { Project } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  project: Project;
};

export default function ProjectType({ project }: Props) {
  return (
    <div className="bg-accent p-8 rounded-xl">
      <div className="mb-10">
        <Image
          src={project.icon}
          alt={project.title}
          width={40}
          height={40}
        />
      </div>
      <p className="heading-5 font-bold mb-6">{project.title}</p>
      <p className="heading-6 text-[#6B6B90]">{project.description}</p>
    </div>
  );
}
