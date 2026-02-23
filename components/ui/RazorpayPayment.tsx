"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    Razorpay: unknown;
  }
}

interface RazorpayPaymentProps {
  amount: number;
  label: string;
}

export default function RazorpayPayment({ amount, label }: RazorpayPaymentProps) {
  const [loading, setLoading] = useState(false);

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    // 1. Load Razorpay script
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      alert("Razorpay SDK failed to load. Check your internet connection.");
      setLoading(false);
      return;
    }

    // 2. Create Order on Backend
    try {
      const orderData = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      }).then((t) => t.json());

      if (orderData.error) throw new Error(orderData.error);

      // --- HANDLE MOCK / SIMULATION ---
      if (orderData.mock) {
        setLoading(false);
        alert(`DEV SIMULATION SUCCESSFUL!\n\nOrder ID: ${orderData.id}\nAmount: ₹${amount}\n\n(No actual transaction occurred because Razorpay keys are not configured in .env)`);
        return;
      }

      // 3. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "KwiqBill Project",
        description: `Backing the ${label}`,
        order_id: orderData.id,
        handler: function (response: { razorpay_payment_id: string }) {
          alert(`Payment Successful! ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#0ea5e9", // Sky-500
        },
      };

      const RazorpayConstructor = window.Razorpay as any;
      const paymentObject = new RazorpayConstructor(options);
      paymentObject.open();

    } catch (err) {
      console.error(err);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={loading}
      onClick={handlePayment}
      className={`relative px-10 py-5 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-slate-800 font-oswald font-black text-xl uppercase tracking-widest transition-all overflow-hidden group ${loading ? "opacity-50" : ""}`}
    >
      <span className="relative z-10">
        {loading ? "INITIALIZING..." : `Support with ₹${amount}`}
      </span>
      <div className="absolute inset-0 bg-sky-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
    </motion.button>
  );
}
