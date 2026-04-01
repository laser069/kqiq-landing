import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KwiqBill",
  description: "Privacy policy detailing data collection, Google Sign-In, and Google Drive API usage for KwiqBill.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] border-t border-l border-white/60">
        <h1 className="font-oswald font-black text-4xl md:text-5xl text-slate-900 uppercase mb-4 tracking-tight">
          Privacy <span className="text-sky-500">Policy</span>
        </h1>
        <p className="text-slate-500 font-bold mb-10 text-sm uppercase tracking-widest">
          LAST UPDATED: March 30, 2026
        </p>

        <div className="space-y-10 text-slate-700 font-bold leading-relaxed text-sm">
          <p>
            Welcome to KwiqBill. <strong className="text-sky-600">Zippy Digital Solutions</strong> ("we," "our," or "us") is committed to protecting your privacy and transparently explaining how your information is collected, used, and safeguarded when you use our software.
          </p>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-4">1. Information We Collect</h2>
            <p className="mb-6 text-slate-500 italic">
              KwiqBill is designed to operate primarily offline as a local-first application, keeping your sensitive business data stored locally on your device. We only collect the minimal information necessary to authenticate users and manage subscriptions.
            </p>

            <div className="space-y-6">
              <div className="bg-white/60 rounded-xl p-6 shadow-sm border border-white">
                <h3 className="font-oswald font-black tracking-widest text-sm text-slate-800 uppercase mb-2">1.1 Locally Stored Data (Not sent to our servers)</h3>
                <p className="text-xs mb-2">The following data remains strictly on your local device unless you explicitly authorize and configure a third-party cloud sync:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Business Profile:</strong> Name, Address, Tax details (GST/VAT).</li>
                  <li><strong>Customer & Vendor Data:</strong> Contacts, Addresses, Emails.</li>
                  <li><strong>Financial Data:</strong> Invoices, Estimates, Orders, Products, Expenses.</li>
                </ul>
              </div>

              <div className="bg-white/60 rounded-xl p-6 shadow-sm border border-white">
                <h3 className="font-oswald font-black tracking-widest text-sm text-slate-800 uppercase mb-2">1.2 Account & Subscription Data (Collected by us)</h3>
                <p className="text-xs mb-2">To provide authentication and subscription management, we collect:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>User details:</strong> Name, Email, Password.</li>
                  <li><strong>Subscription data:</strong> License status, license keys, and device linking information.</li>
                  <li><strong>Payment history:</strong> Historical transaction records (excluding raw credit card details).</li>
                  <li><strong>Authentication data:</strong> Securely hashed passwords and authentication tokens.</li>
                </ul>
              </div>

              <div className="bg-white/60 rounded-xl p-6 shadow-sm border border-white">
                <h3 className="font-oswald font-black tracking-widest text-sm text-slate-800 uppercase mb-2">1.3 Google Sign-In (OAuth)</h3>
                <p className="text-xs mb-2">When you choose to authenticate using Google Sign-In, KwiqBill accesses only the following standard profile information:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li>Your name</li>
                  <li>Your email address</li>
                </ul>
                <p className="mt-3 text-[11px] text-sky-600 italic leading-tight">This information is used strictly to seamlessly create, log in to, and verify your KwiqBill account. We do not request, access, or collect any additional personal data from your Google account without your explicit, separate consent.</p>
              </div>

              <div className="bg-white/60 rounded-xl p-6 shadow-sm border border-white">
                <h3 className="font-oswald font-black tracking-widest text-sm text-slate-800 uppercase mb-2">1.4 Google Drive Integration</h3>
                <p className="text-xs mb-2">If you choose to enable automated cloud backups, KwiqBill requests access to the Google Drive API.</p>
                <ul className="list-disc list-inside space-y-2 text-slate-600">
                  <li><strong>Consent:</strong> Access is only granted after you provide explicit authorization.</li>
                  <li><strong>Restricted Scope:</strong> KwiqBill only creates, uses, and accesses its own specific application backup files within your Google Drive.</li>
                  <li><strong>No Access to Unrelated Files:</strong> KwiqBill does <strong className="text-rose-500">NOT</strong> and cannot access, read, modify, or delete any other unrelated files, folders, or personal data stored in your Google Drive.</li>
                </ul>
                <div className="mt-4 p-4 bg-sky-50/50 rounded-lg border border-sky-100">
                  <p className="text-[11px] text-sky-800 leading-relaxed font-bold">
                    KwiqBill's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="underline decoration-sky-300 hover:text-sky-600 transition-colors">Google API Service User Data Policy</a>, including the Limited Use requirements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>To Provide Services:</strong> Facilitating user authentication, invoicing, billing, inventory, and expense management.</li>
              <li><strong>To Manage Subscriptions:</strong> Verifying license status, processing payments, and enforcing service policies.</li>
              <li><strong>To Enable Backups:</strong> Synchronizing your KwiqBill database strictly to your authorized Google Drive account.</li>
              <li><strong>To Improve the App:</strong> Analyzing completely anonymized usage data or error logs to fix bugs and enhance performance.</li>
              <li><strong>To Communicate:</strong> Sending important account updates, security notices, and providing customer support.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">3. Data Sharing & Disclosure</h2>
            <p className="mb-2">We do <strong className="text-rose-500">NOT</strong> sell your personal or business data to third parties. Disclosure occurs only in the following limited circumstances:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Service Providers:</strong> Trusted third-party partners assisting in app operation (e.g., cloud hosting, payment gateways, and transactional email services).</li>
              <li><strong>Legal Compliance:</strong> If required by law, subpoena, or to protect the rights, property, and safety of Zippy Digital Solutions or our users.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">4. Data Retention and Deletion</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Retention:</strong> We retain your account and subscription data only for as long as your account is active, or as strictly needed to provide you with our services, comply with legal obligations, resolve disputes, and enforce our agreements.</li>
              <li><strong>Deletion:</strong> Users have the right to request the complete deletion of their account and associated personal data at any time. Upon contacting us with a deletion request, all personally identifiable information stored on our servers will be permanently expunged within 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">5. Data Security</h2>
            <p className="mb-2">We implement robust technical and organizational security measures to protect your information, including:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>Strong hashing encryption for stored passwords (bcrypt).</li>
              <li>Secure token-based authentication (JWT).</li>
              <li>Encrypted communication protocols (HTTPS/SSL) for any data transmitted between your device and our servers.</li>
            </ul>
            <p className="mt-4 italic text-[11px] text-slate-500 font-medium">
              While we strive to use the highest commercially acceptable means to protect your data, please remember that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">6. Offline Capabilities</h2>
            <p className="text-slate-600">
              KwiqBill is designed to function offline using securely cached authentication tokens (JWT). Because your business data is primarily stored locally, it is your sole responsibility to secure physical and logical access to your device to prevent unauthorized local access to your data.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">7. Your Choices & Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li><strong>Google Drive Access:</strong> You retain full control and can revoke KwiqBill's access to your Google Drive at any time via your Google Account Security settings.</li>
              <li><strong>Local Data:</strong> You retain full control over all business data stored natively on your device.</li>
              <li><strong>Account Deletion:</strong> Contact us at any time to exercise your right to delete your account, subscription data, and email from our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">8. Policy Updates</h2>
            <p className="text-slate-600">
              We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. We will notify you of material changes by updating the "Last Updated" date and potentially via in-app notifications.
            </p>
          </section>

          <section>
            <h2 className="font-oswald font-black text-xl text-slate-900 uppercase mb-3">9. Contact Us</h2>
            <p className="text-slate-600">If you have any questions, concerns, or deletion requests regarding this Privacy Policy or your data, please reach out to:</p>
            <div className="mt-6 p-6 md:p-8 bg-slate-900 rounded-3xl text-white inline-block shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-20 blur-3xl rounded-full" />
              <p className="font-oswald font-black text-2xl tracking-widest uppercase relative z-10 text-white">Zippy Digital Solutions</p>
              <div className="mt-4 space-y-1 relative z-10 font-bold">
                <p className="text-slate-400">Email: <span className="text-sky-400">knock@zippydigitalsolutions.in</span></p>
                <p className="text-slate-400">Website: <span className="text-sky-400">zippydigitalsolutions.in</span></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
