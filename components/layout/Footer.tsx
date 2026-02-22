"use client";

import Link from "next/link";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Innovation Lab", href: "/" },
  { name: "Process", href: "/contact" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/novalisai/about/",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-background overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-16">
        {/* Brand & Mission */}
        <div className="space-y-6 max-w-sm">
          <Link
            href="/"
            className="inline-block transform hover:scale-[1.02] transition-transform"
          >
            <span className="text-2xl font-bold tracking-tighter text-foreground">
              Novalis<span className="text-primary">AI</span>
            </span>
          </Link>
          <p className="text-base text-muted-foreground leading-relaxed">
            Modern software development and practical AI integration for SMEs
            backed by our Innovation Lab.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="w-full lg:w-auto">
          <Button
            asChild
            className="w-full lg:w-auto h-14 px-10 rounded-2xl bg-primary text-background font-bold hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@novalisai.com">hello@novalisai.com</a>
          </div>
        </div>

        <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
          © {new Date().getFullYear()} NovalisAI Laboratory. Built for real
          impact.
        </div>
      </div>
    </footer>
  );
}
