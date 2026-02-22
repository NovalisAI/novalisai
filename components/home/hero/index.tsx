"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FloatingProjects } from "./FloatingProjects";
import { getProjectsBySlugs } from "@/lib/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const featuredProjects = getProjectsBySlugs([
    "capi",
    "capi",
    "capi",
    "capi",
    "capi",
    "capi",
    "capi",
    "capi",
  ]).map((project) => project.image);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024 && windowWidth < 1440;

  const orbitConfig = useMemo(
    () => ({
      radiusX: isMobile ? 180 : isTablet ? 350 : isDesktop ? 550 : 625,
      radiusY: isMobile ? 140 : isTablet ? 220 : isDesktop ? 280 : 310,
      imageWidth: isMobile ? 60 : isTablet ? 100 : 130,
      imageHeight: isMobile ? 45 : isTablet ? 75 : 100,
    }),
    [isMobile, isTablet],
  );

  return (
    <header className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex flex-col justify-between pb-12 md:pb-16 lg:pb-20">
      <FloatingProjects
        projects={featuredProjects}
        radiusX={orbitConfig.radiusX}
        radiusY={orbitConfig.radiusY}
        imageWidth={orbitConfig.imageWidth}
        imageHeight={orbitConfig.imageHeight}
        animationDuration={80}
        className={isMobile ? "" : "translate-x-12"}
      />

      <motion.div
        className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold leading-tight text-foreground">
            Build software <br /> that runs your business
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
              AI automation built for real impact{" "}
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We build web platforms, internal tools, and data products for SMEs
            integrating AI where it drives real operational impact.{" "}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            asChild
            variant="default"
            className="px-8 heading-6 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Link href="/projects" className="flex items-center gap-2">
              View Projects
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="px-8 heading-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-semibold"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book a 20-min Call
            </Link>
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12"
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium"> Weekly demos</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Clear scope & timelines</span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-border" />
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Production-ready delivery</span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
