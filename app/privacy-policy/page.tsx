import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MediRemind Privacy Policy - Learn how we collect, use, and protect your personal and health information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "January 26, 2026";

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-100">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to MediRemind ("we," "our," or "us"). We are committed to protecting your privacy
                and ensuring the security of your personal information. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our mobile
                application and related services.
              </p>
              <p className="text-gray-600">
                By using MediRemind, you agree to the collection and use of information in accordance
                with this policy. If you do not agree with our policies and practices, please do not
                use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Account credentials</li>
                <li>Profile information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Health Information</h3>
              <p className="text-gray-600 mb-4">To provide our medication reminder services, we collect:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Medication names and dosages</li>
                <li>Medication schedules and timing</li>
                <li>Medication adherence history</li>
                <li>Health-related notes you choose to add</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Usage Information</h3>
              <p className="text-gray-600 mb-4">We automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (model, operating system, unique device identifiers)</li>
                <li>App usage data and analytics</li>
                <li>Log data and crash reports</li>
                <li>Notification interaction data</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our medication reminder services</li>
                <li>To send you notifications and reminders about your medications</li>
                <li>To personalize your experience and improve our app</li>
                <li>To analyze app usage and optimize performance</li>
                <li>To provide customer support and respond to your inquiries</li>
                <li>To detect, prevent, and address technical issues or fraud</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your personal and health
                information. Your data is encrypted both in transit and at rest. We use secure cloud
                storage services and regularly review our security practices.
              </p>
              <p className="text-gray-600">
                However, no method of transmission over the internet or electronic storage is 100%
                secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>Service providers:</strong> With trusted third-party service providers who assist in operating our app</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection of rights:</strong> To protect our rights, privacy, safety, or property</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Export:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> Opt-out of certain data collection and processing activities</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us through the Help & Support page.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-600">
                MediRemind is not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13. If you are a parent or guardian and believe
                your child has provided us with personal information, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide our services and
                fulfill the purposes outlined in this Privacy Policy. When you delete your account, we
                will delete or anonymize your personal information, except where we are required to
                retain it for legal or regulatory purposes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and maintained on servers located outside of your
                country. We ensure that such transfers comply with applicable data protection laws and
                that your information receives adequate protection.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date. We
                encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@mediremind.flowentech.com</p>
                <p className="text-gray-700 mb-2"><strong>Website:</strong> https://mediremind.flowentech.com</p>
                <p className="text-gray-700"><strong>Support:</strong> Visit our Help & Support page</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
