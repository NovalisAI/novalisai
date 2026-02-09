import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { EMail } from "@/types";

export async function POST(req: Request) {
    try {
        const body: EMail = await req.json();
        const { name, from, subject, message } = body;

        if (!name || !from || !subject || !message) {
            return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
        }

        await sendMail({ name, from, subject, message });

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error: any) {

        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
