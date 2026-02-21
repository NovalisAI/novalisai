import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left side - Content */}
        <div className="flex-1 lg:max-w-lg">
          <h2 className="heading-2 font-bold mb-6">About Our Company</h2>

          <div className="space-y-6 mb-8">
            <p className="heading-6 text-muted-foreground leading-relaxed">
              Founded in 2020, we started with a simple mission: to create
              beautiful, functional tools that empower designers and developers
              to build exceptional digital experiences.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-surface"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="heading-5 font-bold mb-1">
                  Quality First Approach
                </h4>
                <p className="heading-6 text-muted-foreground">
                  Every product is crafted with attention to detail and a
                  commitment to excellence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-surface"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="heading-5 font-bold mb-1">Community Focused</h4>
                <p className="heading-6 text-muted-foreground">
                  We listen to our users and continuously improve based on real
                  feedback.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-surface"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="heading-5 font-bold mb-1">Innovation Driven</h4>
                <p className="heading-6 text-muted-foreground">
                  We embrace new technologies and methodologies to stay ahead of
                  the curve.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              variant="default"
              className="w-full sm:w-auto heading-6 rounded-full text-surface"
            >
              <Link href="/#pricing">Get Started</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto heading-6 rounded-full border border-[#d4d8eb]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="flex-1 w-full">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-accent to-white rounded-3xl p-12 border border-border">
              <div className="space-y-8">
                <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 7H7v6h6V7z" />
                      <path
                        fillRule="evenodd"
                        d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v1h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-1v1a1 1 0 11-2 0v-1h-2v1a1 1 0 11-2 0v-1H7a2 2 0 01-2-2v-1H4a1 1 0 110-2h1V9H4a1 1 0 110-2h1V7H4a1 1 0 010-2h1V4a2 2 0 012-2h1V2a1 1 0 010-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4+</p>
                    <p className="heading-6 text-muted-foreground">
                      Years of Excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM1 10a6 6 0 0112 0 6 6 0 01-12 0zm14-7h4v2h-4V3zm0 4h4v2h-4V7zm0 4h4v2h-4v-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">10K+</p>
                    <p className="heading-6 text-muted-foreground">
                      Satisfied Users
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-surface rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5.0★</p>
                    <p className="heading-6 text-muted-foreground">
                      User Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
