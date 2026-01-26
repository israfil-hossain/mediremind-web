import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "MediRemind Terms of Service - Read the terms and conditions for using our medication reminder app.",
};

export default function TermsOfService() {
  const lastUpdated = "January 26, 2026";

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-blue-100">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                Welcome to MediRemind. By accessing or using our mobile application, website, or any
                related services (collectively, the "Services"), you agree to be bound by these Terms
                of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
              </p>
              <p className="text-gray-600">
                These Terms constitute a legally binding agreement between you and MediRemind ("we," "us,"
                or "our"). We reserve the right to modify these Terms at any time, and your continued use
                of the Services constitutes acceptance of any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                MediRemind is a medication reminder and tracking application designed to help users manage
                their medication schedules. Our Services include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Medication reminder notifications</li>
                <li>Medication tracking and history</li>
                <li>Schedule management</li>
                <li>Cloud synchronization (for premium users)</li>
                <li>Family profile management</li>
                <li>Reporting and analytics features</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Medical Disclaimer</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 font-semibold mb-2">IMPORTANT: Please Read Carefully</p>
                <p className="text-gray-600">
                  MediRemind is a tool to assist with medication management and is NOT a substitute for
                  professional medical advice, diagnosis, or treatment. Always seek the advice of your
                  physician or other qualified health provider with any questions you may have regarding
                  a medical condition or medication regimen.
                </p>
              </div>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We do not provide medical advice or recommendations</li>
                <li>We are not responsible for medication dosages or schedules you enter</li>
                <li>You should always verify medication information with your healthcare provider</li>
                <li>Do not rely solely on our app for critical medication management</li>
                <li>We are not liable for any health consequences resulting from use of our Services</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Account Creation</h3>
              <p className="text-gray-600 mb-4">
                To use certain features of MediRemind, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Age Requirements</h3>
              <p className="text-gray-600">
                You must be at least 13 years old to use MediRemind. If you are under 18, you must have
                permission from a parent or legal guardian to use our Services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Conduct</h2>
              <p className="text-gray-600 mb-4">You agree NOT to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Services for any illegal purpose or in violation of any laws</li>
                <li>Violate the rights of others, including privacy and intellectual property rights</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Use automated systems to access the Services without permission</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or harvest information about other users</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Payment Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Free and Premium Services</h3>
              <p className="text-gray-600 mb-4">
                MediRemind offers both free and premium subscription plans. Premium features may include
                cloud sync, unlimited medications, family profiles, and advanced reporting.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Billing</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Subscriptions are billed in advance on a recurring basis (monthly or annually)</li>
                <li>Payment will be charged to your payment method at confirmation of purchase</li>
                <li>Subscriptions automatically renew unless cancelled at least 24 hours before renewal</li>
                <li>You can manage and cancel subscriptions through your app store account settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Refunds</h3>
              <p className="text-gray-600">
                Refunds are handled according to the policies of your app store (Google Play Store or
                Apple App Store). Generally, payments are non-refundable except as required by law.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of MediRemind, including but not limited to
                text, graphics, logos, icons, images, audio clips, and software, are the exclusive
                property of MediRemind and are protected by copyright, trademark, and other intellectual
                property laws.
              </p>
              <p className="text-gray-600">
                You are granted a limited, non-exclusive, non-transferable license to access and use
                the Services for personal, non-commercial purposes. You may not copy, modify, distribute,
                sell, or lease any part of our Services without our express written permission.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
              <p className="text-gray-600">
                Your privacy is important to us. Our collection and use of personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
                By using our Services, you consent to the collection and use of your information as
                described in the Privacy Policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitation of Liability</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.1 Service Availability</h3>
              <p className="text-gray-600 mb-4">
                We strive to provide reliable Services, but we do not guarantee that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                <li>Notifications will be delivered at the exact scheduled time</li>
                <li>The Services will meet your specific requirements</li>
                <li>Any errors in the Services will be corrected</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.2 "As Is" and "As Available"</h3>
              <p className="text-gray-600 mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF
                ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">9.3 Limitation of Liability</h3>
              <p className="text-gray-600">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, MEDIREMIND SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
                OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICES.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify, defend, and hold harmless MediRemind and its officers, directors,
                employees, and agents from any claims, liabilities, damages, losses, and expenses,
                including reasonable attorney's fees, arising out of or in any way connected with your
                access to or use of the Services, your violation of these Terms, or your violation of
                any rights of another party.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to suspend or terminate your access to the Services at any time,
                with or without notice, for any reason, including if we believe you have violated these
                Terms.
              </p>
              <p className="text-gray-600">
                You may terminate your account at any time by deleting the app and contacting us to
                delete your data. Upon termination, your right to use the Services will immediately cease.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the
                jurisdiction in which MediRemind operates, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600">
                Any disputes arising from these Terms or your use of the Services shall be resolved
                through binding arbitration, except where prohibited by law.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify you of material
                changes through the app or via email. Your continued use of the Services after such
                notification constitutes acceptance of the modified Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is found to be unenforceable or invalid, that provision
                will be limited or eliminated to the minimum extent necessary, and the remaining
                provisions will remain in full force and effect.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@mediremind.flowentech.com</p>
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
