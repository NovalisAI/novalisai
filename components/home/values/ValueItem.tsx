import { Value } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  value: Value;
};

export default function ValueItem({ value }: Props) {
  return (
    <div className="flex flex-col space-y-3">
      <Image
        src={value.icon}
        alt={value.title}
        width={32}
        height={32}
      />
      <p className="heading-5 font-bold">{value.title}</p>
      <p className='heading-6'>{value.description}</p>
    </div>
  );
}
