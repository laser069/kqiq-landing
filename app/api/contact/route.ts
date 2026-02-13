import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // VALIDATION
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // LOGIC: This is where you would integrate with an email provider
        // Example: Resend, Postmark, or Nodemailer
        
        console.log("Contact Form Submission Received:");
        console.log(`To: knock@zippydigitalsolutions.in`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Message: ${message}`);

        // For now, we simulate a successful transmission
        // In a real production environment, you would use an API key from a service like Resend.com
        
        /* 
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'KwiqBill Contact <onboarding@resend.dev>',
            to: 'knock@zippydigitalsolutions.in',
            subject: `New Inquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        */

        return NextResponse.json(
            { message: "Inquiry received and queued for delivery" },
            { status: 200 }
        );
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error during transmission" },
            { status: 500 }
        );
    }
}
