import React from "react";
import CategoryItem from "./CategoryItem";
import { Category } from "@/types";
import InfiniteScroll from "@/components/InfiniteScroll";
import "@/styles/infinite-scroll.css";
import { shuffle } from "@/lib/utils";

export default function Categories() {
  return (
    <div className="py-24 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-center mb-4">Growing Categories</h2>
        <h6 className="lg:max-w-150 mb-12 text-center">
          Diverse and ever-growing categories, carefully chosen to support
          current and future projects.{" "}
        </h6>
      </div>
      <div className="space-y-6">
        <InfiniteScroll
          elements={shuffle(categories)}
          renderElement={(element, i) => (
            <CategoryItem key={element.title} category={element} index={i} />
          )}
        />
        <InfiniteScroll
          elements={shuffle(categories)}
          isReverse
          renderElement={(element, i) => (
            <CategoryItem key={element.title} category={element} index={i} />
          )}
        />
        <InfiniteScroll
          elements={shuffle(categories)}
          renderElement={(element, i) => (
            <CategoryItem key={element.title} category={element} index={i} />
          )}
        />
      </div>
    </div>
  );
}
export const categories: Category[] = [
  {
    title: "UI Basics",
    icon: "/assets/bell-notification-zappicon.png",
    iconsCount: 192,
    stylesCount: 5,
  },
  {
    title: "Arrows",
    icon: "/assets/arrow-up-right-circle-zappicon.png",
    iconsCount: 150,
    stylesCount: 5,
  },
  {
    title: "Buildings",
    icon: "/assets/building-zappicon.png",
    iconsCount: 193,
    stylesCount: 5,
  },
  {
    title: "Business & Finance",
    icon: "/assets/presentation-play-zappicon.png",
    iconsCount: 135,
    stylesCount: 5,
  },
  {
    title: "Charts & Diagrams",
    icon: "/assets/chart-pie-simple-zappicon.png",
    iconsCount: 134,
    stylesCount: 5,
  },
  {
    title: "Chatting",
    icon: "/assets/chats-dots-zappicon.png",
    iconsCount: 114,
    stylesCount: 5,
  },
  {
    title: "Coding (⚡ New)",
    icon: "/assets/browser-terminal-zappicon.png",
    iconsCount: 36,
    stylesCount: 5,
  },
  {
    title: "Commenting",
    icon: "/assets/comments-dots-zappicon.png",
    iconsCount: 114,
    stylesCount: 5,
  },
  {
    title: "Communication",
    icon: "/assets/envelope-open-text-zappicon.png",
    iconsCount: 213,
    stylesCount: 5,
  },
  {
    title: "Connectivity",
    icon: "/assets/satellite-dish-zappicon.png",
    iconsCount: 102,
    stylesCount: 5,
  },
  {
    title: "Currencies",
    icon: "/assets/dollar-circle-zappicon.png",
    iconsCount: 168,
    stylesCount: 5,
  },
  {
    title: "Date & Time",
    icon: "/assets/alarm-clock-three-zappicon.png",
    iconsCount: 250,
    stylesCount: 5,
  },
  {
    title: "Design & Editing",
    icon: "/assets/highlighter-line-zappicon.png",
    iconsCount: 96,
    stylesCount: 5,
  },
  {
    title: "Devices & Hardware",
    icon: "/assets/print-zappicon.png",
    iconsCount: 577,
    stylesCount: 5,
  },
  {
    title: "Documents",
    icon: "/assets/clipboard-past-zappicon.png",
    iconsCount: 183,
    stylesCount: 5,
  },
  {
    title: "E-Commerce & Shopping",
    icon: "/assets/basket-shopping-zappicon.png",
    iconsCount: 474,
    stylesCount: 5,
  },
  {
    title: "Education",
    icon: "/assets/book-bookmark-zappicon.png",
    iconsCount: 108,
    stylesCount: 5,
  },
  {
    title: "Files",
    icon: "/assets/file-text-zappicon.png",
    iconsCount: 188,
    stylesCount: 5,
  },
  {
    title: "Location & Map",
    icon: "/assets/location-pin-line-zappicon.png",
    iconsCount: 102,
    stylesCount: 5,
  },
  {
    title: "Menu & Grids",
    icon: "/assets/grid-square-search-zappicon.png",
    iconsCount: 36,
    stylesCount: 5,
  },
  {
    title: "Messaging",
    icon: "/assets/messages-dots-zappicon.png",
    iconsCount: 114,
    stylesCount: 5,
  },
  {
    title: "Multimedia",
    icon: "/assets/play-circle-zappicon.png",
    iconsCount: 240,
    stylesCount: 5,
  },
  {
    title: "Payment & Money",
    icon: "/assets/wallet-zappicon.png",
    iconsCount: 183,
    stylesCount: 5,
  },
  {
    title: "Security",
    icon: "/assets/shield-star-zappicon.png",
    iconsCount: 90,
    stylesCount: 5,
  },
  {
    title: "Sign & Indices",
    icon: "/assets/registered-circle-zappicon.png",
    iconsCount: 54,
    stylesCount: 5,
  },
  {
    title: "Support & Reviews",
    icon: "/assets/heart-sparkles-zappicon.png",
    iconsCount: 120,
    stylesCount: 5,
  },
  {
    title: "Text Formatting",
    icon: "/assets/paragraph-left-zappicon.png",
    iconsCount: 96,
    stylesCount: 5,
  },
  {
    title: "Users & People",
    icon: "/assets/users-simple-alt-zappicon.png",
    iconsCount: 114,
    stylesCount: 5,
  },
];
