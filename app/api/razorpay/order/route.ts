import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// INITIALIZE RAZORPAY
// Note: In production, these should come from .env
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_placeholder",
    key_secret: process.env.RAZORPAY_KEY_SECRET || "placeholder_secret",
});

export async function POST(req: Request) {
    try {
        const { amount, currency = "INR" } = await req.json();

        if (!amount) {
            return NextResponse.json({ error: "Amount is required" }, { status: 400 });
        }

        // --- SIMULATED / MOCK MODE FOR DEV ---
        // If keys are missing or placeholders, return a simulated order to prevent 500 errors
        const isPlaceholder = !process.env.RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID.includes("placeholder") || !process.env.RAZORPAY_KEY_SECRET;
        
        if (isPlaceholder) {
            console.log("RAZORPAY: Running in Simulated Mode (No Keys Found)");
            return NextResponse.json({
                id: `order_sim_${Date.now()}`,
                currency,
                amount: Math.round(amount * 100),
                mock: true
            });
        }

        const options = {
            amount: Math.round(amount * 100), 
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            id: order.id,
            currency: order.currency,
            amount: order.amount,
        });

    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json(
            { error: "Failed to create payment order" },
            { status: 500 }
        );
    }
}
