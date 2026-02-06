import React from "react";
import { Metadata } from "next";
import FeaturesClient from "./FeaturesClient";

export const metadata: Metadata = {
  title: "Features | KWIQBILL - GST Billing & Store Management",
  description: "Explore the powerful features of KWIQBILL - Offline billing, GST invoicing, inventory management, and financial reporting for Indian businesses.",
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
