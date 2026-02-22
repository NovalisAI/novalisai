"use client";

import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

interface FloatingProjectsProps {
  projects: string[];
  className?: string;
  radiusX?: number;
  radiusY?: number;
  imageWidth?: number;
  imageHeight?: number;
  animationDuration?: number;
}

const ProjectItem = ({
  src,
  index,
  total,
  radiusX,
  radiusY,
  width,
  height,
  duration,
}: {
  src: string;
  index: number;
  total: number;
  radiusX: number;
  radiusY: number;
  width: number;
  height: number;
  duration: number;
}) => {
  const time = useTime();

  const angle = useTransform(time, (t) => {
    const rotationProgress = (2 * Math.PI * t) / (duration * 1000);
    const startAngle = (2 * Math.PI * index) / total;
    return startAngle + rotationProgress;
  });

  const x = useTransform(
    angle,
    (a) => radiusX + radiusX * Math.sin(a) - width / 2,
  );
  const y = useTransform(
    angle,
    (a) => radiusY - radiusY * Math.cos(a) - height / 2,
  );

  // Depth effect: smaller and more blurred when at the "back" (top of the orbit)
  const scale = useTransform(angle, (a) => {
    const cos = Math.cos(a);
    return 1 + cos * 0.15; // Scale between 0.85 and 1.15
  });

  const opacity = useTransform(angle, (a) => {
    const cos = Math.cos(a);
    return 0.7 + cos * 0.3; // Opacity between 0.4 and 1.0
  });

  const zIndex = useTransform(y, (val) => Math.round(val));

  return (
    <motion.div
      className="pointer-events-auto absolute"
      style={{
        left: x,
        top: y,
        width: width,
        height: height,
        zIndex,
        scale,
        opacity,
      }}
    >
      <motion.div
        className="group relative h-full w-full overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:ring-primary/40"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={`Project ${index + 1}`}
          fill
          sizes={`${width}px`}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Glossy overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-50" />
        {/* Subtle shadow glow when at front */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]" />
      </motion.div>
    </motion.div>
  );
};

export const FloatingProjects = ({
  projects,
  className = "",
  radiusX = 350,
  radiusY = 250,
  imageWidth = 64,
  imageHeight = 48,
  animationDuration = 30,
}: FloatingProjectsProps) => {
  const items = projects.slice(0, 8);
  const count = items.length;

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible ${className}`}
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{ width: radiusX * 2, height: radiusY * 2 }}
      >
        {/* Orbit Path - Subtle Glow */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible opacity-20"
          style={{ width: radiusX * 2, height: radiusY * 2 }}
        >
          <ellipse
            cx={radiusX}
            cy={radiusY}
            rx={radiusX}
            ry={radiusY}
            className="fill-none stroke-primary/30 stroke-[0.5]"
          />
        </svg>

        {items.map((src, i) => (
          <ProjectItem
            key={i}
            src={src}
            index={i}
            total={count}
            radiusX={radiusX}
            radiusY={radiusY}
            width={imageWidth}
            height={imageHeight}
            duration={animationDuration}
          />
        ))}
      </div>
    </div>
  );
};
