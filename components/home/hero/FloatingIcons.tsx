"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const floatingIcons = [
  {
    id: 1,
    icon: "/assets/figma-file.svg",
    label: "AI",
    top: "10%",
    left: "8%",
    duration: 6,
    delay: 0,
  },
  {
    id: 2,
    icon: "/assets/iconjar-file.svg",
    label: "VR",
    top: "10%",
    right: "8%",
    duration: 8,
    delay: 1,
  },
  {
    id: 3,
    icon: "/assets/zap.svg",
    label: "Cloud",
    top: "45%",
    left: "3%",
    duration: 7,
    delay: 0.5,
  },
  {
    id: 4,
    icon: "/assets/svg-file.svg",
    label: "Tech",
    top: "45%",
    right: "3%",
    duration: 9,
    delay: 1.5,
  },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/20 backdrop-blur-sm">
            <Image src={item.icon} alt={item.label} width={36} height={36} />
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
