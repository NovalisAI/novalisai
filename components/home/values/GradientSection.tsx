import Image from "next/image";
import React from "react";

export default function GradientSection() {
  return (
    <div className="text-white py-12 gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <div className="flex flex-col space-y-4">
        <p className="heading-6">RELIABILITY</p>
        <p className="heading-5 font-bold uppercase">
          Ongoing support that keeps you moving
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
        <p className="heading-6">
          {" "}
          Clear response times and practical fixes when it matters.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Image
          src={`/assets/memos-white.svg`}
          alt={"memos-icon"}
          width={32}
          height={32}
        />
        <p className="heading-5 font-bold">Flexible Engagement</p>
        <p className="heading-6">
          Project delivery, pilot sprints, or monthly retainers.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <Image
          src={`/assets/time-backward-white.svg`}
          alt={"time-backward-icon"}
          width={32}
          height={32}
        />
        <p className="heading-5 font-bold">Continuous Improvement</p>
        <p className="heading-6">
          Maintenance, security updates, performance upgrades, iterations.
        </p>
      </div>
    </div>
  );
}
