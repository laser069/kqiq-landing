"use client";

import React from "react";
import ContactHero from "@/components/ui/ContactHero";
import ContactForm from "@/components/ui/ContactForm";
import FAQSection from "@/components/ui/FAQSection";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen font-oswald">
            <ContactHero />
            <ContactForm />
            <FAQSection />
        </div>
    );
}
