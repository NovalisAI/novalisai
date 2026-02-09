"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from 'react'

export default function MessageSent() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className="max-w-md mx-auto">
            <div className="flex flex-col items-center justify-center py-24">
                <div>
                    <Image src="/assets/party-horn.svg" alt="Party Horn" width={80} height={80} />
                </div>

                <p className="font-bold mt-8 mb-4 text-center heading-3">
                    Your message has been sent successfully!
                </p>

                <p className="mb-12 text-center">
                    Thank you for reaching out. We will get back to you as soon as possible via your from, so make sure to keep
                    an eye on it!
            </p>

                <div>
                    <Button variant="primary" asChild>
                        <Link href="/">
                            <Image src="/assets/arrow-turn-left.svg" alt="arrow-turn-left" width={24} height={24} />
                            Back to Home
            </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
