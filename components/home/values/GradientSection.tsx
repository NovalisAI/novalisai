import Image from "next/image";
import React from "react";

export default function GradientSection() {
  return (
    <div className="text-white py-12 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div className="flex flex-col space-y-4">
        <p className="heading-6">RELIABILITY</p>
        <p className="heading-4 font-bold uppercase">
          Ongoing Support and Value
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Image
          src={`/assets/chat-dots-bolt-white.svg`}
          alt={"chat-dots-bolt-icon"}
          width={32}
          height={32}
        />
        <p className="heading-5 font-bold">Fast Support</p>
        <p className="heading-6">Fast 24/7 support via email or website. </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Image
          src={`/assets/memos-white.svg`}
          alt={"memos-icon"}
          width={32}
          height={32}
        />
        <p className="heading-5 font-bold">Flexible Licenses</p>
        <p className="heading-6">
          Very simple licenses for both paid and free use.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Image
          src={`/assets/time-backward-white.svg`}
          alt={"time-backward-icon"}
          width={32}
          height={32}
        />
        <p className="heading-5 font-bold">Lifetime Updates</p>
        <p className="heading-6">
          Lifetime free updates, always at the latest level.
        </p>
      </div>
    </div>
  );
}
