import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MediRemind, our mission to help people manage their medications effectively, and the team behind the app.",
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About MediRemind</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Empowering people to take control of their health through smart medication management
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At MediRemind, we believe that managing your health should be simple and stress-free.
                Our mission is to help people never miss their medications by providing an intuitive,
                reliable, and user-friendly reminder system.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We understand that remembering to take medications can be challenging, especially when
                managing multiple prescriptions or caring for family members. That's why we created
                MediRemind – to make medication adherence easier for everyone.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centric Design</h3>
                    <p className="text-gray-600">
                      We prioritize simplicity and ease of use in every feature we build.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                    <p className="text-gray-600">
                      Your health data is personal, and we treat it with the highest level of security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">
                      We're constantly improving and adding new features based on user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              MediRemind was born from a simple observation: many people struggle to remember their
              daily medications, leading to missed doses and health complications. Our founders
              experienced this firsthand when caring for elderly family members.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We realized that existing solutions were either too complicated or lacked essential
              features. So we set out to create an app that would be both powerful and easy to use –
              one that anyone could set up in minutes and rely on every day.
            </p>
            <p className="text-lg text-gray-600">
              Today, MediRemind serves thousands of users worldwide, helping them stay on track with
              their medications and maintain their health routines. We're proud to be making a
              positive impact on people's lives, one reminder at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We build systems you can trust to work when you need them most.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💙</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We care deeply about improving the lives of our users and their families.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our product and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions or feedback? We'd love to hear from you.
          </p>
          <a
            href="/help-support"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
