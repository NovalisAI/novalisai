import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Styles() {
  return (
    <div className="py-24 flex flex-col justify-center items-center">
      <h2 className="font-bold mb-4 text-center">Unique Styles</h2>
      <h6 className="lg:max-w-150 mb-12 text-center">
        The library includes 5 different styles for each icon, perfectly crafted
        to match every creative vision.
      </h6>
      <div className="grid grid-cols-2 lg:grid-cols-[repeat(5,160px)] gap-y-4 lg:gap-y-12 gap-x-6">
        {styles.map((style, i) => (
          <div
            key={style.title}
            className={cn(
              "bg-accent pt-8 pb-6 rounded-xl flex flex-col items-center justify-center",
              {
                "col-span-2 lg:col-span-1": i + 1 === styles.length,
              },
            )}
          >
            <Image
              src={style.image}
              width={40}
              height={40}
              alt={style.title}
              className="mb-4"
            />
            <h6 className="font-medium mb-2">{style.title}</h6>
            <p className="font-semibold">{style.iconsCount} ICONS</p>
          </div>
        ))}
        <div className="bg-[#F58855] rounded-xl text-surface space-x-6 pt-8 pb-8 px-10 flex items-start col-span-2 lg:col-span-2">
          <Image
            src="/assets/Keyline-NovalisAI.png"
            width={96}
            height={96}
            alt="keyline"
          />
          <div className="flex flex-col space-y-3">
            <h5 className="uppercase font-bold">Keyline</h5>
            <h6 className="">
              Unified keyline shapes on a 24×24 px grid for consistency.
            </h6>
          </div>
        </div>
        <div className="flex items-center lg:items-start px-10 pt-8 pb-8 flex-col bg-accent rounded-xl col-span-2 lg:col-span-3">
          <h5 className="font-bold uppercase mb-3">Formats</h5>
          <h6 className="mb-3">
            Multiple formats supported to simplify your workflow.
          </h6>
          <div className="flex flex-row space-x-3">
            {formats.map((format, i) => (
              <div
                key={i}
                className="flex flex-row items-center justify-center gap-3 bg-surface rounded-full w-11 h-11"
              >
                <Image
                  src={format.image}
                  alt={format.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = [
  {
    title: "Light (1px)",
    iconsCount: 4576,
    image: "/assets/house-roof-light.svg",
  },
  {
    title: "Regular (1.5px)",
    iconsCount: 4576,
    image: "/assets/house-roof-regular.svg",
  },
  {
    title: "Filled",
    iconsCount: 4576,
    image: "/assets/house-roof-filled.svg",
  },
  {
    title: "Duotone",
    iconsCount: 4576,
    image: "/assets/house-roof-duotone.svg",
  },
  {
    title: "Duotone Line",
    iconsCount: 4576,
    image: "/assets/house-roof-duotone-line.svg",
  },
];

const formats = [
  { image: "/assets/figma-file.svg", alt: "Figma" },
  { image: "/assets/svg-file.svg", alt: "Svg" },
  { image: "/assets/iconjar-file.svg", alt: "Iconjar" },
  { image: "/assets/png-file.svg", alt: "Png" },
];
