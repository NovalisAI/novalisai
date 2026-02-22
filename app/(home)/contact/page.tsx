"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";

import { contactSchema } from "@/lib/validators/contact.schema";
import MessageSent from "@/components/contact/MessageSent";
import { useMutate } from "@/hooks/use-mutation";
import { EMail } from "@/types";

const subjects = [
  { value: "ai-solutions", label: "Artificial Intelligence Solutions" },
  { value: "vr-ar", label: "VR / AR Virtual Reality Lab" },
  { value: "enterprise", label: "Enterprise Software & Cloud" },
  { value: "partnership", label: "Strategic Partnership" },
  { value: "general", label: "General Business Inquiry" },
];

export default function ContactPage() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      from: "",
      message: "",
      subject: "",
    },
  });

  const {
    mutate: sendMail,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutate<EMail>("/api/contact");

  useEffect(() => {
    if (isPending) {
      toast.loading("Sending transmission...", { id: "contact-form" });
    } else if (isSuccess) {
      toast.success("Transmission received!", { id: "contact-form" });
    } else if (isError) {
      toast.error(error || "Transmission failed", { id: "contact-form" });
    }
  }, [isPending, isSuccess, isError, error]);

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      await sendMail(values as EMail);
      form.reset();
    } catch (err) {}
  }

  if (isSuccess) {
    return (
      <AnimatePresence>
        <div className="min-h-[60vh] flex items-center justify-center">
          <MessageSent />
        </div>
      </AnimatePresence>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Toaster theme="dark" position="bottom-right" />

      {/* Background radial gradient for depth */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a,black)] -z-10" />

      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Contact Novalis AI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Let&apos;s Start a{" "}
            <span className="text-primary italic">Dialogue</span>.
          </h1>
          <p className="text-lg text-foreground/50 max-w-xl mx-auto leading-relaxed">
            Reach out to our laboratory. We typically respond within 12 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "hello@novalisai.com",
              href: "mailto:hello@novalisai.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "+32 474 32 77 03",
              href: "tel:+32474327703",
            },
            {
              icon: MapPin,
              label: "Office",
              value: "Louvain-la-Neuve, 1348, Belgium",
              href: "",
            },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.5 }}
              className="flex flex-col text-center items-center p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/[0.08] transition-all group"
            >
              <item.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">
                {item.label}
              </span>
              <span className="text-sm font-medium">{item.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-foreground/5 border border-foreground/10 p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 text-primary/10 -z-0">
            <MessageSquare className="w-32 h-32" />
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/60 font-medium">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          className="h-14 bg-foreground/5 border-foreground/10 focus:border-primary focus:ring-0 rounded-2xl text-base px-6 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/60 font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@example.com"
                          type="email"
                          className="h-14 bg-foreground/5 border-foreground/10 focus:border-primary focus:ring-0 rounded-2xl text-base px-6 transition-all"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/60 font-medium">
                      Subject of Inquiry
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-14 bg-foreground/5 border-foreground/10 focus:border-primary focus:ring-0 rounded-2xl text-base px-6">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-foreground/10 rounded-2xl text-foreground">
                        {subjects.map((s) => (
                          <SelectItem
                            key={s.value}
                            value={s.value}
                            className="focus:bg-foreground/10 hover:bg-foreground/5 cursor-pointer rounded-xl py-3"
                          >
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/60 font-medium">
                      Message Detail
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project or inquiry..."
                        className="min-h-[160px] bg-foreground/5 border-foreground/10 focus:border-primary focus:ring-0 rounded-2xl text-base p-6 resize-none transition-all"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-16 bg-primary hover:bg-primary/90 text-foreground font-bold rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                {isPending ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <span className="flex text-background items-center gap-3">
                    Send Message
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      </main>
    </div>
  );
}
