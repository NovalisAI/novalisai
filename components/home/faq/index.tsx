import { GradientText } from "@/components/ui/gradient-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="py-24" id="faq">
      <div className="flex flex-col items-center justify-centermx-auto space-y-4 mb-12">
        <GradientText
          gradients={["#FB923C", "#FED7AA"]}
          className="heading-2 font-bold text-center"
        >
          Frequently <br /> Asked Question
        </GradientText>
        <p className="heading-6 text-center max-w-150">
          Got Questions? We’ve Got Answers!
        </p>
      </div>
      <div className="max-w-202 mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={faq.title}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

const faqs = [
  {
    title: "What do I get after purchasing?",
    content:
      "You’ll get full access to a complete icon library featuring 22,000+ high-quality icons. The icons are organized into 25+ main categories and available in 5 different styles (Light, Regular, Filled, Duotone, and Duotone Line). All icons come in SVG and PNG formats, along with a professionally organized IconJar and Figma file for easy browsing and customization.",
  },
  {
    title: "Can I use the icons in commercial projects?",
    content:
      "Absolutely! All icons are licensed for both personal and commercial use with unlimited projects or clients, as long as they are not resale or redistributed directly or indirectly as standalone assets or included resources.",
  },
  {
    title: "Are the icons customizable?",
    content:
      "Yes, you can easily customize the colors and size using Figma or any editor that supports SVG.",
  },
  {
    title: "How will I receive updates after purchase?",
    content:
      "When a new update is released, you will receive an email containing the download link.",
  },
  {
    title: "Will I need to pay monthly or annual fees?",
    content:
      "No, the icon library is currently sold with a one-time payment with no recurring fees. However, we may switch to a subscription-based model in the future.",
  },
  {
    title: "Will early buyers be affected if the model changes?",
    content:
      "No, early buyers will receive additional benefits in appreciation of their trust and early support for the project.",
  },
  {
    title:
      "Are new versions or updates released? If so, will I get them for free?",
    content:
      "Yes, the icon library is regularly updated, and you’ll get all future updates for free after your purchase.",
  },
  {
    title:
      "I want to include the icons in products I sell, what license do I need?",
    content:
      "In this case, you’ll need an 'Extended License', which allows including the icons into commercial tools or products intended for resale. Please contact us to discuss the details and find the best option for your project.",
  },
];
