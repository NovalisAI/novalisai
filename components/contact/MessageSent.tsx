"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle2, ArrowLeft, Rocket } from "lucide-react";

export default function MessageSent() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto relative px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />

      <div className="flex flex-col items-center justify-center py-12 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-2xl shadow-primary/20">
            <Rocket className="w-12 h-12" />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1"
          >
            <CheckCircle2 className="w-8 h-8 text-green-500 bg-background rounded-full" />
          </motion.div>
        </motion.div>

        <h2 className="text-3xl font-bold mb-4 tracking-tight">
          Transmission Received
        </h2>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Thank you for reaching out to **Novalis AI**. Our project agents are
          analyzing your request. We will get back to you shortly via email.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            asChild
            className="h-12 px-8 rounded-full bg-primary text-white font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 gap-2"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Return to Base
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
