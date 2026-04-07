import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | KwiqBill",
  description: "Terms and conditions for using KwiqBill software by Zippy Digital Solutions.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-white/50 backdrop-blur-xl rounded-[3rem] p-10 md:p-20 shadow-[40px_40px_80px_#bebebe,-40px_-40px_80px_#ffffff] border border-white/80">
        <h1 className="font-oswald font-black text-5xl md:text-7xl text-slate-900 uppercase mb-6 tracking-tighter leading-none">
          Terms & <span className="text-sky-500">Conditions</span>
        </h1>
        <p className="text-slate-400 font-black mb-16 text-base uppercase tracking-[0.2em]">
          LAST UPDATED: March 24, 2026
        </p>

        <div className="space-y-16 text-slate-600 font-medium leading-loose text-lg">
          <p>
            Welcome to KwiqBill. By accessing or using this website or software, you agree to the following terms.
          </p>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">1. About KwiqBill</h2>
            <p>
              KwiqBill is a free and open-source billing software developed, owned, and maintained by <strong className="text-sky-600">Zippy Digital Solutions</strong>. It is provided to help individuals and organizations manage billing, invoicing, and related operations.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">2. Open-Source License</h2>
            <p>
              KwiqBill is released under the Apache License 2.0. You are free to use, modify, distribute, and self-host for personal or commercial purposes, provided you comply with all terms laid out within the Apache License 2.0.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">3. Acceptable Use of Software</h2>
            <p>
              You agree to use KwiqBill responsibly and in compliance with all applicable laws. You shall not use KwiqBill for any illegal or unauthorized activities, misrepresent KwiqBill as your own proprietary software, remove any copyright or proprietary notices, or falsely claim ownership of the original project.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">4. No Warranty</h2>
            <p>
              KwiqBill is provided "as is" and "as available", without warranties of any kind, either express or implied. Zippy Digital Solutions does not guarantee that the software will be uninterrupted, error-free, or meet all of your specific requirements. Users are solely responsible for ensuring their data accuracy and maintaining their own data backups.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Zippy Digital Solutions and KwiqBill contributors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to data loss, financial loss, loss of profits, or business interruption, arising out of your use or inability to use the software. You use KwiqBill entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">6. Data & Privacy</h2>
            <p>
              KwiqBill is designed with a local-first approach. Business data is securely stored locally on your device or in user-configured cloud services. We collect minimal operational data necessary for authentication and subscriptions as outlined in our Privacy Policy, and we do not sell your data. Third-party syncing services, including Google Drive integrations, are entirely opt-in and controlled by the user.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">7. Contributions</h2>
            <p>
              By contributing code, designs, or other materials to KwiqBill, you agree that your contributions are licensed under the Apache License 2.0 and warrant that you have the legal right to submit them.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">8. Third-Party Services</h2>
            <p>
              KwiqBill may integrate with third-party services like cloud storage or authentication providers (e.g., Google Sign-In, Google Drive). Zippy Digital Solutions is not responsible for the availability, security, or behavior of these third-party integrations.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-3xl text-slate-900 uppercase mb-6 tracking-tight">9. Changes to Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. Continued use of KwiqBill after any such changes constitutes your acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
