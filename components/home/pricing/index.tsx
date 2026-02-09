"use client";
import React from "react";
import { PricingItem } from "./PricingItem";
import { Pricing } from "@/types";
import PricingMobile from "./PricingMobile";
import useMediaQuery from "@/hooks/use-media-query";

export default function PricingSection() {
  const { isLg } = useMediaQuery();

  return (
    <div id="pricing" className="py-24 flex flex-col">
      <div className="flex flex-col items-center justify-center mb-12 space-y-4">
        <h2 className="heading-4 text-center">PRICING</h2>
        <h3 className="heading-3 font-bold text-center">
          PAY ONCE, USE FOREVER!
        </h3>
        <p className="heading-6 text-center max-w-150">
          Whether you&apos;re a designer, developer, freelancer, or part of a
          team, start with a <span className="font-semibold">free plan</span>{" "}
          and easily upgrade as your business grows.
        </p>
      </div>
      {isLg ? (
        <div className="grid gap-6 grid-cols-3">
          {pricingData.map((plan, index) => (
            <PricingItem key={index} pricing={plan} />
          ))}
        </div>
      ) : (
        <PricingMobile pricingData={pricingData} />
      )}
    </div>
  );
}

const pricingData: Pricing[] = [
  {
    title: "FREE",
    icon: "free" as const,
    price: "$0",
    period: "One-time",
    description: "Free to use under our license.",
    features: [
      {
        title: "1 User",
        isAccessible: true,
      },
      {
        title: "1,100+ Free icons",
        isAccessible: true,
      },
      {
        title: "5 Styles",
        isAccessible: true,
      },
      {
        title: "4 Formats",
        isAccessible: true,
      },
      {
        title: "28 Categories",
        isAccessible: false,
      },
      {
        title: "Use in unlimited projects",
        isAccessible: false,
      },
      {
        title: "Free Support",
        isAccessible: false,
      },
      {
        title: "Free Updates",
        isAccessible: false,
      },
    ],
    ctaText: "Start for Free",
    ctaLink: "https://zappicon.gumroad.com/l/ptyjww",
  },
  {
    title: "SOLO",
    icon: "solo" as const,
    offer: "$38",
    price: "$27",
    period: "One-time",
    description: "Perfect for freelancers and solo creators.",
    features: [
      {
        title: "1 User",
        isAccessible: true,
      },
      {
        title: "22,000+ Pro icons",
        isAccessible: true,
      },
      {
        title: "5 Styles",
        isAccessible: true,
      },
      {
        title: "4 Formats",
        isAccessible: true,
      },
      {
        title: "28 Categories",
        isAccessible: true,
      },
      {
        title: "Use in unlimited projects",
        isAccessible: true,
      },
      {
        title: "Free Support",
        isAccessible: true,
      },
      {
        title: "Free Updates",
        isAccessible: true,
      },
    ],
    popular: "30% OFF",
    ctaText: "Buy Now",
    ctaLink: "https://zappicon.gumroad.com/l/gydqgj/SUMMER2025",
  },
  {
    title: "TEAM",
    icon: "team" as const,
    offer: "$168",
    price: "$118+",
    period: "One-time",
    description: "Flexible options for growing teams.",
    features: [
      {
        title: "5+ Users",
        isAccessible: true,
      },
      {
        title: "22,000+ Pro icons",
        isAccessible: true,
      },
      {
        title: "5 Styles",
        isAccessible: true,
      },
      {
        title: "4 Formats",
        isAccessible: true,
      },
      {
        title: "28 Categories",
        isAccessible: true,
      },
      {
        title: "Use in unlimited projects",
        isAccessible: true,
      },
      {
        title: "Free Support",
        isAccessible: true,
      },
      {
        title: "Free Updates",
        isAccessible: true,
      },
    ],
    popular: "30% OFF",
    ctaText: "Buy Now",
    ctaLink:
      "https://zappicon.gumroad.com/l/gydqgj/SUMMER2025/?option=MNXlXHq7jCEgIxcVgVox3Q%3D%3D",
  },
];
