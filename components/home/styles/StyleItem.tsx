import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  className?: string;
  hideImage?: boolean;
};

export default function StyleItem({
  title,
  description,
  image,
  className,
}: Props) {
  return (
    <div className={cn("bg-accent rounded-xl py-10 px-8", className)}>
      <Image
        src={image}
        alt={image}
        sizes="100%"
        width={0}
        height={0}
        style={{ width: "328px", height: "auto", margin: 'auto' }}
      />
      <div className="w-full h-px bg-[#D4D8EB] my-8" />
      <p className="heading-6 font-bold uppercase mb-4">{title}</p>
      <p className='heading-6'>{description}</p>
    </div>
  );
}
