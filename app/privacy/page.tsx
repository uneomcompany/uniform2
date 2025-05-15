import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Saudi Uniform',
  description: 'Information about how Saudi Uniform collects, uses, and protects your personal data.',
  keywords: 'Saudi uniform privacy policy, data protection Saudi Uniform, privacy terms Saudi Arabia',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary">
                Home
              </Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-primary font-medium">Privacy Policy</li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600">Last Updated: April 15, 2025</p>
      </div>

      {/* Privacy Content */}
      <div className="prose max-w-none">
        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Saudi Uniform ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <Link href="/" className="text-primary hover:underline">saudiuniform.com</Link>, including any other media form, media channel, mobile website, or mobile application related or connected thereto.
          </p>
          <p>
            Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Personal Data</h3>
          <p className="mb-4">
            Personally identifiable information (such as your name, email address, phone number, and mailing address) that you voluntarily give to us when you register with our website, sign up for our newsletter, or when you choose to participate in various activities related to the website. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the site.
          </p>
          <h3 className="text-xl font-semibold mb-3">2.2 Derivative Data</h3>
          <p className="mb-4">
            Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.
          </p>
          <h3 className="text-xl font-semibold mb-3">2.3 Financial Data</h3>
          <p className="mb-4">
            Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the website.
          </p>
          <h3 className="text-xl font-semibold mb-3">2.4 Mobile Device Data</h3>
          <p>
            Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the website from a mobile device.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Create and manage your account</li>
            <li>Deliver targeted advertising, newsletters, and other information regarding promotions and the website to you</li>
            <li>Email you regarding your account or order</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website</li>
            <li>Generate a personal profile about you to make future visits to the website more personalized</li>
            <li>Increase the efficiency and operation of the website</li>
            <li>Monitor and analyze usage and trends to improve your experience with the website</li>
            <li>Notify you of updates to the website</li>
            <li>Offer new products, services, and/or recommendations to you</li>
            <li>Perform other business activities as needed</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
            <li>Process payments and refunds</li>
            <li>Request feedback and contact you about your use of the website</li>
            <li>Resolve disputes and troubleshoot problems</li>
            <li>Respond to product and customer service requests</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
          <p className="mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <h3 className="text-xl font-semibold mb-3">4.1 By Law or to Protect Rights</h3>
          <p className="mb-4">
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </p>
          <h3 className="text-xl font-semibold mb-3">4.2 Third-Party Service Providers</h3>
          <p className="mb-4">
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>
          <h3 className="text-xl font-semibold mb-3">4.3 Marketing Communications</h3>
          <p className="mb-4">
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
          </p>
          <h3 className="text-xl font-semibold mb-3">4.4 Business Transfers</h3>
          <p>
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Tracking Technologies</h2>
          <h3 className="text-xl font-semibold mb-3">5.1 Cookies and Web Beacons</h3>
          <p className="mb-4">
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. For more information on how we use cookies, please refer to our Cookie Policy posted on the website.
          </p>
          <h3 className="text-xl font-semibold mb-3">5.2 Website Analytics</h3>
          <p>
            We may also partner with selected third-party vendors, such as Google Analytics, to allow tracking technologies and remarketing services on the website through the use of first-party cookies and third-party cookies, to, among other things, analyze and track users' use of the website, determine the popularity of certain content, and better understand online activity.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Your Rights Regarding Your Information</h2>
          <h3 className="text-xl font-semibold mb-3">6.1 Account Information</h3>
          <p className="mb-4">
            You may at any time review or change the information in your account or terminate your account by contacting us using the contact information provided below.
          </p>
          <h3 className="text-xl font-semibold mb-3">6.2 Emails and Communications</h3>
          <p className="mb-4">
            If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Contacting us using the contact information provided below</li>
            <li>Clicking the unsubscribe link at the bottom of our emails</li>
          </ul>
          <p>
            If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          <p>
            Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
          <p>
            We will retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
          <p>
            Our website is operated in the Kingdom of Saudi Arabia. If you are located in another jurisdiction, please be aware that information you provide to us may be transferred to, stored, and processed in Saudi Arabia. By using this website and providing us with information, you consent to this transfer, processing, and storage of your information in Saudi Arabia, a country that may not provide the same level of data protection as your country of residence.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Saudi Uniform</strong></p>
            <p className="mb-2">King Fahd Road, Riyadh</p>
            <p className="mb-2">Kingdom of Saudi Arabia</p>
            <p className="mb-2">Email: privacy@saudiuniform.com</p>
            <p>Phone: +966 11 123 4567</p>
          </div>
        </div>
      </div>
    </div>
  );
} 