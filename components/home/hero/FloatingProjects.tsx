"use client";

import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

interface FloatingProjectsProps {
  projects: string[];
  className?: string;
  radiusX?: number;
  radiusY?: number;
  mobileRadiusX?: number;
  mobileRadiusY?: number;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageWidth?: number;
  mobileImageHeight?: number;
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
      }}
    >
      <motion.div
        className="group relative h-full w-full overflow-hidden rounded-2xl bg-white/5 shadow-xl shadow-black/30 ring-1 ring-white/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:ring-white/40"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={src}
          alt={`Project ${index + 1}`}
          fill
          sizes={`${width}px`}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.12] to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export const FloatingProjects = ({
  projects,
  className = "",
  radiusX = 350,
  radiusY = 250,
  mobileRadiusX = 180,
  mobileRadiusY = 140,
  imageWidth = 64,
  imageHeight = 48,
  mobileImageWidth = 44,
  mobileImageHeight = 33,
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
        className="relative hidden md:block"
        style={{ width: radiusX * 2, height: radiusY * 2 }}
      >
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          style={{ width: radiusX * 2, height: radiusY * 2 }}
        >
          <ellipse
            cx={radiusX}
            cy={radiusY}
            rx={radiusX}
            ry={radiusY}
            className="fill-none stroke-white/5 stroke-1"
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

      {/* Mobile Orbit */}
      <div
        className="relative block md:hidden"
        style={{ width: mobileRadiusX * 2, height: mobileRadiusY * 2 }}
      >
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          style={{ width: mobileRadiusX * 2, height: mobileRadiusY * 2 }}
        >
          <ellipse
            cx={mobileRadiusX}
            cy={mobileRadiusY}
            rx={mobileRadiusX}
            ry={mobileRadiusY}
            className="fill-none stroke-white/5 stroke-1"
          />
        </svg>

        {items.map((src, i) => (
          <ProjectItem
            key={i}
            src={src}
            index={i}
            total={count}
            radiusX={mobileRadiusX}
            radiusY={mobileRadiusY}
            width={mobileImageWidth}
            height={mobileImageHeight}
            duration={animationDuration * 0.8}
          />
        ))}
      </div>
    </div>
  );
};
