"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
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
import { GradientText } from "@/components/ui/gradient-text";

import Image from "next/image";
import { contactSchema } from "@/lib/validators/contact.schema";
import MessageSent from "@/components/contact/MessageSent";
import { AnimatePresence } from "motion/react";
import { useMutate } from "@/hooks/use-mutation";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { EMail } from "@/types";
import { useEffect } from "react";

const subjects = [
  { value: "general", label: "General" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "request", label: "Request Custom Icons" },
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
  } = useMutate<EMail>("https://zappicon.com/mail.php");

  useEffect(() => {
    let toastId: string | number | null = null;

    if (isPending) {
      toastId = toast.loading("Sending email...");
    } else {
      if (toastId !== null) {
        toast.dismiss(toastId);
      }
    }

    return () => {
      if (toastId !== null) toast.dismiss(toastId);
    };
  }, [isPending]);

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const { name, from, message, subject } = values;

    try {
      await sendMail({ name, from, message, subject });

      form.reset();

      /* typescript-eslint-disable no-implicit-any */
    } catch (error: any) {
      toast.error("Network error occured when sending mail");
    }
  }

  if (isSuccess) {
    return (
      <AnimatePresence>
        <MessageSent />
      </AnimatePresence>
    );
  }

  return (
    <div className="py-24 space-y-12">
      <Toaster />
      <div className="flex flex-col space-y-4">
        <GradientText className="heading-3 font-bold text-center">
          We&apos;re Excited To Hear From You!
        </GradientText>
        <div>
          <h6 className="text-center">
            Whether you have questions, feedback, or need support.
          </h6>
          <h6 className="text-center">
            Reach out to us via the website form or directly through from:
          </h6>
        </div>
        <a
          href="mailto:support@zappicon.com"
          className="font-medium inline-block text-center hover:underline"
        >
          support@zappicon.com
        </a>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="h-12 rounded-full bg-accent placeholder:text-muted-foreground"
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
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="text"
                    className="h-12 rounded-full bg-accent placeholder:text-muted-foreground"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full rounded-full bg-accent">
                      <SelectValue
                        placeholder="Subject"
                        className="text-muted-foreground"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
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
                <FormControl>
                  <Textarea
                    placeholder="Message..."
                    className="min-h-50 rounded-lg bg-accent placeholder:text-muted-foreground p-4 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 transition-colors font-bold rounded-full text-white"
            disabled={isPending}
          >
            {!(isSuccess && !isError) ? (
              <Image
                src="/assets/send-launch-w.svg"
                width={20}
                height={20}
                className="invert"
                alt="Send"
              />
            ) : (
              <Image
                src="/assets/loading.svg"
                alt="loading"
                width={20}
                height={20}
                className="animate-spin"
              />
            )}{" "}
            SEND
          </Button>
        </form>
      </Form>
    </div>
  );
}
