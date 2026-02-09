import { Category } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  category: Category;
  index: number;
};
export default function CategoryItem({ category, index }: Props) {
  return (
    <div
      style={{
        animationDelay: `calc(30s / 8 * (8 - ${index}) * -1)`,
      }}
      className="w-72 flex flex-row gap-4 p-4 rounded-lg bg-white"
    >
      <div className="flex justify-center items-center">
        <Image
          src={category.icon}
          alt={category.title}
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col">
        <p className="heading-6 text-[#353566] font-semibold text-left">
          {category.title}
        </p>
        <p className="paragraph uppercase text-[#6B6B90] font-semibold text-left">
          {category.iconsCount} icons | {category.stylesCount} styles
        </p>
      </div>
    </div>
  );
}
