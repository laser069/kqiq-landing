import React from 'react';

export default function StructuredData() {
    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "KWIQ BILLING",
        "operatingSystem": "Android, Windows, iOS, MacOS",
        "applicationCategory": "BusinessApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1050"
        },
        "description": "KWIQ BILLING is a next-generation GST billing and revenue infrastructure platform for Indian and global businesses.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is KWIQ BILLING free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, KWIQ BILLING offers a free tier for mobile users with essential GST billing features."
                }
            },
            {
                "@type": "Question",
                "name": "Does KWIQ BILLING work offline?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. KWIQ BILLING is designed with an offline-first architecture, allowing you to generate bills without internet and sync once back online."
                }
            }
        ]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kwiq-billing.web.app"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "GST Billing Software",
                "item": "https://kwiq-billing.web.app"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
