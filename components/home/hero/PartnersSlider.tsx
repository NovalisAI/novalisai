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
  { id: 1, name: "Tech Corp", logo: "/assets/figma-file.svg" },
  { id: 2, name: "Design Studio", logo: "/assets/grid-category.svg" },
  { id: 3, name: "Digital Agency", logo: "/assets/building-zappicon.png" },
  { id: 4, name: "Innovation Lab", logo: "/assets/iconjar-file.svg" },
  {
    id: 6,
    name: "AI Solutions",
    logo: "/assets/browser-terminal-zappicon.png",
  },
];

const infinitePartners = [...partners, ...partners, ...partners];

export default function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const motionDivRef = useRef<HTMLDivElement>(null);
  const [pauseAnimation, setPauseAnimation] = useState(false);

  return (
    <div className="py-12 border-t border-border">
      <div className="text-center mb-8">
        <p className="heading-6 text-muted-foreground font-semibold">
          TRUSTED BY LEADING COMPANIES
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
          {/* Infinite scrolling logos */}
          {infinitePartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-24 h-16 md:w-28 md:h-20 flex items-center justify-center"
              whileHover={{ scale: isDragging ? 1 : 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full group cursor-grab active:cursor-grabbing">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient overlays for edge effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white via-white to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white via-white to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
