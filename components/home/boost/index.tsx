import { GradientText } from "@/components/ui/gradient-text";
import Image from "next/image";
import React from "react";

export default function Boost() {
  return (
    <div className="py-24">
      <div className="flex flex-col space-y-4 mb-12 items-center justify-center mx-auto">
        <h2 className="heading-2 text-center font-bold">
          Boost UX with Icons <br /> that Deliver{" "}
          <GradientText element='span'>Instant Expression</GradientText>
        </h2>
        <p className="heading-6 text-center max-w-150">
          The most popular icons feature a modifier icon to improve visual
          communication and clarify concepts more precisely.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:pr-6">
        <Image
          src="/assets/Instant Expression-zappicon-1.png"
          alt="instant-expression-1"
          sizes="100%"
          width={0}
          height={0}
          className="rounded-xl w-full lg:w-1/2 h-auto"
        />
        <Image
          src="/assets/Instant Expression-zappicon-2.png"
          alt="instant-expression-2"
          sizes="100%"
          width={0}
          height={0}
          className="rounded-xl w-full lg:w-1/2 h-auto"
        />
      </div>
    </div>
  );
}
