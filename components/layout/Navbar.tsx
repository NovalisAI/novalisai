"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <motion.div
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.90)" : "#fff",
        boxShadow: scrolled
          ? "0 2px 16px 0 rgba(0,0,0,0.08)"
          : "0 0px 0px 0 rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out h-16 lg:h-24",
      )}
      style={{ WebkitBackdropFilter: scrolled ? "blur(8px)" : "blur(0px)" }}
    >
      <div className="flex items-center justify-between max-w-318 mx-auto px-6 h-full">
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-105 text-3xl"
        >
          NovalisAI
        </Link>

        <div className="flex justify-center items-center gap-10">
          <ul className="hidden lg:flex gap-8 lg:gap-10">
            <li className="relative group">
              <Link
                data-text={"Services"}
                href="/"
                className="relative transition-colors duration-300 hover:font-semibold after:content-[attr(data-text)] after:block after:h-0 after:overflow-hidden after:invisible after:font-semibold"
              >
                Services
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/updates"
                data-text={"Projects"}
                className="relative transition-colors duration-300 hover:font-semibold after:content-[attr(data-text)] after:block after:h-0 after:overflow-hidden after:invisible after:font-semibold"
              >
                Projects
              </Link>
            </li>
            <li className="relative group">
              <Link
                data-text={"Innovation Lab"}
                href="/#pricing"
                className="relative transition-colors duration-300 hover:font-semibold after:content-[attr(data-text)] after:block after:h-0 after:overflow-hidden after:invisible after:font-semibold"
              >
                Innovation Lab
              </Link>
            </li>
            <li className="relative group">
              <Link
                data-text={"Process"}
                href="/contact"
                className="relative transition-colors duration-300 hover:font-semibold after:content-[attr(data-text)] after:block after:h-0 after:overflow-hidden after:invisible after:font-semibold"
              >
                Process
              </Link>
            </li>
            <li className="relative group">
              <Link
                data-text={"Support"}
                href="/contact"
                className="relative transition-colors duration-300 hover:font-semibold after:content-[attr(data-text)] after:block after:h-0 after:overflow-hidden after:invisible after:font-semibold"
              >
                Support
              </Link>
            </li>
          </ul>

          <Button
            variant="primary"
            asChild
            className="hidden lg:flex px-5 heading-6 font-semibold items-center gap-2 transition-all duration-300 rounded-full text-surface"
          >
            <Link
              href="https://www.figma.com/design/sir3dwEd5hn1Z8K3hZnGYi/novalisai--Preview----Your-Shortcut-to-Smarter-Icons"
              target="_blank"
            >
              <span className="text-background">Book a Call</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="lg"
            variant="primary"
            className="flex rounded-full items-center transition-transform duration-300 hover:scale-105"
          >
            <Link
              href="https://www.figma.com/design/sir3dwEd5hn1Z8K3hZnGYi/novalisai--Preview----Your-Shortcut-to-Smarter-Icons"
              target="_blank"
            >
              Preview <span className="hidden sm:block">Icons</span>
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border rounded-md lg:hidden transition-transform duration-300 hover:scale-105"
              >
                <Image
                  alt="icon"
                  src={`/assets/${
                    !isOpen ? "menu-bars-novalisai" : "xmark-novalisai"
                  }.svg`}
                  className="w-5 h-5"
                  width={20}
                  height={20}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="px-4 top-16">
              <div className="flex flex-col h-full">
                <nav className="flex flex-col gap-8 mt-8">
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href="/"
                    className="heading-6 font-semibold transition-all duration-300 hover:text-primary hover:translate-x-1"
                  >
                    Services
                  </Link>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href="/updates"
                    className="heading-6 transition-all duration-300 hover:text-primary hover:translate-x-1"
                  >
                    Projects
                  </Link>
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    href="/#pricing"
                    scroll={false}
                    className="heading-6 transition-all duration-300 hover:text-primary hover:translate-x-1"
                  >
                    Innovation Lab
                  </Link>

                  <Link
                    href="/contact"
                    className="heading-6 transition-all duration-300 hover:text-primary hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Process
                  </Link>
                  <Link
                    href="/contact"
                    className="heading-6 transition-all duration-300 hover:text-primary hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Support
                  </Link>
                </nav>

                <div className="mt-auto pb-6 pt-6">
                  <Button
                    variant="primary"
                    asChild
                    className="w-full transition-all duration-300 hover:shadow-lg"
                  >
                    <Link
                      href="https://novalisai.com/#pricing"
                      className="flex items-center"
                    >
                      <Image
                        alt="bolt-fast"
                        className="h-4 w-4 mr-2"
                        src="/assets/bolt-fast.svg"
                        width={24}
                        height={24}
                      />
                      Get All Icons
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
}
