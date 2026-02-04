"use client";

import React from "react";
import ContactHero from "@/components/ui/ContactHero";
import SignalAnalysis from "@/components/ui/SignalAnalysis";
import ContactForm from "@/components/ui/ContactForm";
import FAQSection from "@/components/ui/FAQSection";
import ContactFooter from "@/components/ui/ContactFooter";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen font-oswald">
            <ContactHero />
            <SignalAnalysis />
            <ContactForm />
            <FAQSection />
            <ContactFooter />
        </div>
    );
}
