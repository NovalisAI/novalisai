"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/novalisai/about/",
    icon: Linkedin,
  },
];

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Projects", href: "/projects" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "AI Solutions", href: "/services/ai" },
      { name: "Web Development", href: "/services/web" },
      { name: "VR/AR Lab", href: "/services/vr" },
      { name: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Brand Assets", href: "/brand" },
      { name: "Updates", href: "/updates" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/5 bg-background pt-24 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter text-foreground">
                Novalis<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              We engineer the digital landscape of tomorrow. From cognitive AI
              systems to immersive immersive VR experiences, we transform
              complexity into elegant solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/50">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span>hello@novalisai.com</span>
          </div>

          <div className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} NovalisAI Laboratory. Built by
            visionaries.
          </div>

          <div className="flex gap-8 text-sm">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
