"use client";

import { Metadata } from "next";
import { useState } from "react";

export default function HelpSupport() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I add a new medication?",
      answer: "To add a new medication, tap the '+' button on the home screen, enter the medication name, dosage, and schedule. You can also add notes and set custom reminder times."
    },
    {
      question: "Can I set different reminder times for different medications?",
      answer: "Yes! Each medication can have its own custom reminder schedule. You can set multiple times per day, specific days of the week, or even interval-based reminders."
    },
    {
      question: "How do I mark a medication as taken?",
      answer: "When you receive a reminder notification, you can mark it as taken directly from the notification. You can also mark medications as taken from the app's home screen by tapping the checkbox next to each medication."
    },
    {
      question: "Can I manage medications for my family members?",
      answer: "Yes! MediRemind supports multiple profiles. You can create profiles for family members and manage their medications separately. This is perfect for caregivers managing medications for elderly parents or children."
    },
    {
      question: "What happens if I miss a dose?",
      answer: "If you miss a dose, MediRemind will record it in your history. You can view your adherence history to track missed doses and patterns. The app will continue to remind you for the next scheduled dose."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely! We use industry-standard encryption to protect your data both in transit and at rest. Your health information is private and secure. Please read our Privacy Policy for more details."
    },
    {
      question: "Can I export my medication history?",
      answer: "Yes, premium users can export their medication history as a PDF or CSV file. This is useful for sharing with healthcare providers or keeping personal records."
    },
    {
      question: "How do I change notification settings?",
      answer: "Go to Settings > Notifications to customize your reminder preferences. You can change the notification sound, enable/disable vibration, and set quiet hours."
    },
    {
      question: "Does MediRemind work offline?",
      answer: "Yes! MediRemind works offline for all core features including reminders and tracking. An internet connection is only needed for cloud sync and backup features."
    },
    {
      question: "How do I delete my account?",
      answer: "To delete your account, go to Settings > Account > Delete Account. Please note that this action is permanent and will delete all your data from our servers."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-blue-100">
            Find answers to common questions or get in touch with our support team
          </p>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Getting Started Guide</h3>
              <p className="text-gray-600 mb-4">
                New to MediRemind? Learn the basics and set up your first medication reminder in minutes.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                View Guide →
              </button>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">
                Watch step-by-step video tutorials covering all features of MediRemind.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Watch Videos →
              </button>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tips & Tricks</h3>
              <p className="text-gray-600 mb-4">
                Discover advanced features and tips to get the most out of MediRemind.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Support</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6 text-center">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-2">We typically respond within 24 hours</p>
                  <a href="mailto:support@mediremind.flowentech.com" className="text-blue-600 hover:text-blue-700">
                    support@mediremind.flowentech.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-2">Available Monday-Friday, 9AM-5PM EST</p>
                  <button className="text-blue-600 hover:text-blue-700">Start Chat</button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your issue or question..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="/privacy-policy" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600 text-sm">Learn how we protect your data and privacy</p>
            </a>
            <a href="/terms-of-service" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600 text-sm">Review our terms and conditions</p>
            </a>
            <a href="/about" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-2xl mb-3">ℹ️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600 text-sm">Learn more about MediRemind</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
