"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "Security", logo: "/assets/internet-security.svg" },
  { id: 2, name: "Cloud", logo: "/assets/cloud.svg" },
  { id: 3, name: "UI/UX", logo: "/assets/figma.svg" },
  { id: 4, name: "AI", logo: "/assets/ai.svg" },
  {
    id: 6,
    name: "Analytics",
    logo: "/assets/analytics.svg",
  },
];

const infinitePartners = [...partners, ...partners, ...partners];

export default function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const motionDivRef = useRef<HTMLDivElement>(null);
  const [pauseAnimation, setPauseAnimation] = useState(false);

  return (
    <div className="py-6">
      <div className="text-center mb-14">
        <p className="heading-5 text-foreground font-semibold">
          Product-level standards. Real delivery
        </p>
        <p className="heading-6 text-muted-foreground font-semibold max-w-2/3 mx-auto">
          Clean architecture, strong UX, secure systems, and fast iterations
          with a process designed for reliability.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPauseAnimation(true)}
        onMouseLeave={() => setPauseAnimation(false)}
      >
        <motion.div
          ref={motionDivRef}
          className="flex gap-8 md:gap-12"
          animate={{ x: [-0, -1800] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          drag="x"
          dragElastic={0.2}
          dragMomentum={false}
          onDragStart={() => {
            setIsDragging(true);
            setPauseAnimation(true);
          }}
          onDragEnd={() => {
            setIsDragging(false);
            setPauseAnimation(false);
          }}
        >
          {infinitePartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-3"
              whileHover={{ scale: isDragging ? 1 : 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-16 h-12 md:w-20 md:h-14 group cursor-grab active:cursor-grabbing">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
