"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCallback, useEffect, useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  // avatar: string;
}

const contentVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nishanth Manimaran",
    title: "Web Designer",
    content:
      "I've had a fantastic experience using the zappicon icon pack I downloaded. The variety of formats and easy accessibility make it a go-to for my projects. With a plethora of options across different categories, it's a versatile tool that enhances the visual appeal of my work.",
    // avatar: "/assets/testimonial-zappicon-avatar-1.png",
  },
  {
    id: 2,
    name: "Laszlo Janosi",
    title: "Product Designer",
    content:
      "Greatest and most usable icon library so far. Tried many other libraries, but this is the best that fits most of my projects. Also well worth the price! Thank you!",
    // avatar: "/assets/testimonial-zappicon-avatar-1.png",
  },
  {
    id: 3,
    name: "Antonio J",
    title: "Full Stack Developer",
    content:
      "I love using Zappicon in my projects; it gives them a special touch that makes them look modern and clean. It saves me so much time. It's truly worth it.",
    // avatar: "/assets/testimonial-zappicon-avatar-1.png",
  },
  {
    id: 4,
    name: "Ramzy Kemmoun",
    title: "Software Engineer",
    content:
      "I love how clean and good-looking the icons from Zappicon are. They make any UI feel more modern and professional",
    // avatar: "/assets/testimonial-zappicon-avatar-1.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="py-24 mx-auto">
      <div className="text-center mb-24">
        <h2 className="heading-2 font-bold mb-2">
          See What Others Are Saying <br /> About{" "}
          <span className="text-primary">Zappicon!</span>
        </h2>
      </div>

      <div className="relative max-w-202 mx-auto">
        <div className="absolute -top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={`avatar-${currentIndex}`}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.3 },
              }}
            >
              <Avatar className="w-24 h-24 border-6 border-white">
                <AvatarImage
                  // src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                />
                <AvatarFallback className="heading-3">
                  {testimonials[currentIndex].name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </AnimatePresence>
        </div>
        <Card className="bg-accent border-0 h-112 md:h-78 overflow-hidden pt-18 pb-12">
          <CardContent className="px-6 relative h-full">
            <div className="text-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`content-${currentIndex}`}
                  custom={direction}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 0.3,
                    },
                  }}
                  className="flex flex-col items-center"
                >
                  <p className="heading-6 font-bold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#6B6B90] mb-6">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="leading-8">
                    {testimonials[currentIndex].content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 gap-2">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="rounded-full group bg-accent hover:bg-primary border-0"
            aria-label="Previous testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 7L9 12L14 17"
                className="group-hover:stroke-white"
                stroke="#353566"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button
            onClick={handleNext}
            variant="default"
            size="icon"
            className="rounded-full group bg-accent hover:bg-primary border-0"
            aria-label="Next testimonial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 7L15 12L10 17"
                className="group-hover:stroke-white"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
