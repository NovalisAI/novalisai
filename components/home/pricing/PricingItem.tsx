import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Pricing } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  pricing: Pricing;
  isMobile?: boolean;
}

export function PricingItem({
  pricing: {
    title,
    icon,
    price,
    offer,
    period,
    description,
    features,
    popular,
    ctaText = "Buy Now",
    ctaLink = "#",
    priceLabel = "Price:",
  },
  isMobile,
}: Props) {
  return (
    <div className="rounded-xl bg-white py-12 px-8">
      <div className="mb-4 flex items-center gap-1">
        <div className="flex h-8 w-8 items-center justify-center">
          {icon === "free" && (
            <Image
              alt="gift-simple"
              className="h-6 w-6"
              src="/assets/gift-simple.svg"
              width={24}
              height={24}
            />
          )}
          {icon === "solo" && (
            <Image
              alt="user-simple-alt"
              className="h-6 w-6"
              src="/assets/user-simple-alt.svg"
              width={24}
              height={24}
            />
          )}
          {icon === "team" && (
            <Image
              alt="users-simple-alt"
              className="h-6 w-6"
              src="/assets/users-simple-alt.svg"
              width={24}
              height={24}
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          <p className="heading-6 font-bold uppercase">{title}</p>
          {popular && (
            <h6 className="rounded-full bg-[#42B883] px-4 py-0.5 text-white font-semibold">
              {popular}
            </h6>
          )}
        </div>
      </div>

      <div className="mb-4">
        {title === "TEAM" ? (
          <div>
            <p className="heading-6 font-bold">From</p>
            <div className="flex items-baseline">
              <p className="heading-3 font-semibold line-through text-[#6B6B90] mr-2">
                {offer}
              </p>
              <p className="heading-3 font-bold">{price}</p>
              <p className="heading-5 ml-1">/{period}</p>
            </div>
          </div>
        ) : (
          <div>
            <p className="heading-6 font-bold">{priceLabel}</p>
            <div className="flex items-baseline">
              <p className="heading-3 font-semibold line-through text-[#6B6B90] mr-2">
                {offer}
              </p>
              <p className="heading-3 font-bold">{price}</p>
              <p className="heading-5 ml-1">/{period}</p>
            </div>
          </div>
        )}
      </div>

      <p className="heading-6 mb-4 text-[#6B6B90]">{description}</p>

      <Button
        className="mb-6 rounded-full w-full heading-6 text-white"
        asChild
        variant="primary"
        data-gumroad-single-product="true"
      >
        <Link href={ctaLink}>{ctaText}</Link>
      </Button>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={cn("flex items-center gap-3", {
              "text-[#8F8FAD]": !feature.isAccessible,
            })}
          >
            <Image
              src={`/assets/${
                feature.isAccessible ? "check-circle" : "ban"
              }.svg`}
              alt="check-circle"
              width={20}
              height={20}
            />
            <h6>{feature.title}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
