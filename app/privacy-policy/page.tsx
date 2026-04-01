import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | KwiqBill",
  description: "Official Privacy Policy for Google API OAuth Verification and branding compliance.",
  alternates: {
    canonical: "https://kwiq.zippydigitalsolutions.in/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'sans-serif',
      lineHeight: '1.6',
      color: '#333',
    }}>
      <h1 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>Privacy Policy</h1>
      <p style={{ fontWeight: 'bold' }}>Last Updated: April 1, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to KwiqBill ("we," "our," "us"), a product of Zippy Digital Solutions. We value your privacy and are committed to protecting your personal data.
          This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <h3>2.1 Google Sign-In Data</h3>
        <p>
          When you use Google Sign-In to access KwiqBill, we request access to only your <strong>Name</strong> and <strong>Email Address</strong>.
        </p>
        <p>
          <strong>Reason for Collection:</strong> This data is used exclusively for user authentication, account creation, and verifying your identity to provide access to our core application services.
        </p>

        <h3>2.2 Google Drive Data (Restricted Scope)</h3>
        <p>
          If you opt-in to our cloud backup feature, KwiqBill requires access to the Google Drive API.
        </p>
        <ul>
          <li><strong>Limited Access:</strong> Our access is strictly limited to creating, reading, and managing specific files and folders that <strong>KwiqBill itself creates</strong> (the Application Data Folder).</li>
          <li><strong>No Access to Unrelated Files:</strong> KwiqBill does not, and cannot, read, modify, or delete any other files, photos, or documents stored in your Google Drive.</li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: '#0056b3' }}>3. Google API Limited Use Disclosure (Google Compliance)</h2>
        <p style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          "KwiqBill's use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the Limited Use requirements."
        </p>
        <p>
          In accordance with these requirements, we explicitly state:
        </p>
        <ul>
          <li><strong>No Advertising:</strong> We do not use user data from Google APIs for advertising purposes.</li>
          <li><strong>No Selling/Sharing:</strong> We do not sell or share Google user data with third parties, except in the limited cases of legal compliance or to process data through trusted service providers required for app functionality.</li>
          <li><strong>No Profiling:</strong> We do not use Google user data to build marketing profiles or track user behavior across the web.</li>
        </ul>
        <p>
          <strong>Necessity Statement:</strong> We only request access to Google user data that is necessary to provide core application functionality, specifically secure authentication and automated cloud backup services.
        </p>
      </section>

      <section>
        <h2>4. Data Usage and Sharing</h2>
        <p>
          We use your data strictly to facilitate billing, inventory management, and business financial tracking locally on your device or via your authorized cloud backups.
          We do not sell your personal or financial information to third parties.
        </p>
      </section>

      <section>
        <h2>5. Data Retention and Deletion</h2>
        <p>
          We retain your data only for as long as your account remains active or as required by legal obligations.
        </p>
        <p>
          <strong>Deletion Rights:</strong> You have the right to request the deletion of your account and all associated data at any time.
          Upon receiving a deletion request via email, all user data stored on our servers will be permanently expunged within <strong>30 days</strong>.
        </p>
        <p>
          <strong>Revoking Access:</strong> You can also revoke KwiqBill's access to your Google Account at any time via the <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer">Google Security Settings</a>.
        </p>
      </section>

      <section>
        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard encryption and security measures (HTTPS/SSL, JWT tokens) to protect your data during transit and at rest.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          For any privacy inquiries or data deletion requests, please contact:
        </p>
        <div style={{ marginTop: '10px' }}>
          <strong>Zippy Digital Solutions</strong><br />
          Email: <a href="mailto:knock@zippydigitalsolutions.in">knock@zippydigitalsolutions.in</a><br />
          Location: Chennai, India
        </div>
      </section>
    </div>
  );
}
