import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-12 md:pt-24 pb-6 md:pb-8 space-y-12 md:space-y-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        <div className="w-full md:flex-1">
          <div className="max-w-full md:max-w-2/3">
            <p className="text-3xl">NovalisAI</p>
            <h6 className="mt-4 md:mt-6 mb-6 md:mb-8">
              Free & Premium Clean & Consistent Icons for Seamless UI.
            </h6>
            <div className="flex flex-wrap gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  target="_blank"
                  href={link.href}
                  className="bg-foreground transition-all hover:bg-primary w-8 h-8 flex items-center justify-center rounded-full"
                >
                  <Image
                    src={link.image || "/placeholder.svg"}
                    width={16}
                    height={16}
                    alt={link.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-1 gap-8 md:gap-0">
          {Object.entries(sections).map(([key, values]) => (
            <div
              key={key}
              className="space-y-4 md:space-y-6 w-full sm:w-1/2 md:flex-1"
            >
              <h6 className="font-semibold">{key.toUpperCase()}</h6>
              <ul className="space-y-2 md:space-y-3 flex flex-col">
                {values.map((value) => (
                  <Link
                    key={value.name}
                    className="hover:font-semibold w-fit text-sm md:text-base"
                    href={value.href}
                  >
                    {value.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-gray-200 dark:border-gray-800 text-xs md:text-sm">
        <h6 className="flex gap-2 items-center">
          <Image
            src="/assets/send-launch.svg"
            width={20}
            height={20}
            alt="Send"
          />
          <span>support@zappicon.com</span>
        </h6>

        <h6>© {new Date().getFullYear()} Zappicon. All rights reserved.</h6>
      </div>
    </footer>
  );
}

const links = [
  {
    name: "Instagram",
    image: "/assets/instagram.svg",
    href: "https://www.instagram.com/zappicon",
  },
  {
    name: "X",
    image: "/assets/x-twitter.svg",
    href: "https://x.com/ZappiconLabs",
  },
  {
    name: "Threads",
    image: "/assets/threads.svg",
    href: "https://www.threads.com/@zappicon",
  },
  {
    name: "dribbble",
    image: "/assets/dribbble.svg",
    href: "https://dribbble.com/zappicon",
  },
  {
    name: "Facebook",
    image: "/assets/facebook-f.svg",
    href: "https://facebook.com/ZappiconLabs",
  },
];

const sections = {
  company: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Pricing",
      href: "/#pricing",
    },
  ],
  help: [
    {
      name: "Support",
      href: "/contact",
    },
    {
      name: "FAQs",
      href: "/#faq",
    },
  ],
  info: [
    {
      name: "License",
      href: "/license",
    },
    {
      name: "Updates",
      href: "/updates",
    },
  ],
};
