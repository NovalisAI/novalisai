'use client'
import { PricingItem } from "./PricingItem";
import { AnimatePresence, Variants, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Pricing } from "@/types";
import { Button } from "../../ui/button";

const variants: Variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
};

type Props = {
    pricingData: Pricing[];
};

export default function PricingMobile({ pricingData }: Props) {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className="border overflow-hidden rounded-xl flex items-center justify-center my-8">
                {pricingData.map((pricing, i) => {
                    const isActiveTab = i === activeTab
                    return (
                        <Button
                            variant={isActiveTab ? 'primary' : 'ghost'}
                            key={pricing.title}
                            className={cn('rounded-none flex-1', {
                                // 'bg-red-500': !isActiveTab
                            })}
                            onClick={() => setActiveTab(i)}
                        >
                            {pricing.title}
                        </Button>
                    )
                })}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    transition={{ duration: 0.1 }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                >
                    <PricingItem pricing={pricingData[activeTab]} isMobile />
                </motion.div>
            </AnimatePresence>
        </>
    );
}