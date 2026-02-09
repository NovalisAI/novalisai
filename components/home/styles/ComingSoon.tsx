import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <div className={cn("bg-primary text-white rounded-xl py-10 px-8")}>
      <Image
        src={"/assets/light-style-zappicon.png"}
        alt={"coming-soon-style-zappicon"}
        sizes="100%"
        width={0}
        height={0}
        style={{ width: "328px", height: "auto" }}
        className="invisible"
      />
      <div className="w-full h-px transparent my-8" />
      <p className="heading-6 font-bold uppercase mb-4">{"Coming Soon..."}</p>
      <p className='heading-6'>{"An inspiring new style coming soon to elevate your designs."}</p>
    </div>
  );
}
