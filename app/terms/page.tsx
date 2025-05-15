import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Saudi Uniform',
  description: 'Terms and conditions for using Saudi Uniform services, website, and resources.',
  keywords: 'Saudi uniform terms, uniform service conditions, Saudi Uniform legal terms',
};

export default function TermsPage() {
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
            <li className="text-primary font-medium">Terms of Service</li>
          </ol>
        </nav>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600">Last Updated: April 15, 2025</p>
      </div>

      {/* Terms Content */}
      <div className="prose max-w-none">
        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Saudi Uniform. These Terms of Service ("Terms") govern your use of our website, services, and resources. By accessing or using our website at <Link href="/" className="text-primary hover:underline">saudiuniform.com</Link>, you agree to be bound by these Terms.
          </p>
          <p>
            If you disagree with any part of these terms, please refrain from using our website and services. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting on this website. Your continued use of the website constitutes your acceptance of such modifications.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Use of Website</h2>
          <h3 className="text-xl font-semibold mb-3">2.1 Permitted Use</h3>
          <p className="mb-4">
            You are granted a non-exclusive, non-transferable, revocable license to access and use our website strictly in accordance with these Terms. As a condition of your use of the website, you warrant that you will not use the website for any purpose that is unlawful or prohibited by these Terms.
          </p>
          <h3 className="text-xl font-semibold mb-3">2.2 Prohibited Activities</h3>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Use the website in any manner that could damage, disable, overburden, or impair the site</li>
            <li>Use any robot, spider, or other automatic device to access the website</li>
            <li>Introduce any viruses, trojan horses, worms, logic bombs, or other harmful material</li>
            <li>Attempt to gain unauthorized access to any portion of the website</li>
            <li>Interfere with the proper working of the website</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of Saudi Uniform and is protected by Saudi Arabian and international copyright laws.
          </p>
          <p className="mb-4">
            Our resources are provided for your personal and non-commercial use. You may download and print materials from our website for your personal reference, but you must not modify the paper or digital copies in any way, and you must not use any illustrations, photographs, or graphics separately from any accompanying text.
          </p>
          <p>
            Any unauthorized use of the materials on our website may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Resources and Downloads</h2>
          <p className="mb-4">
            Saudi Uniform offers various resources and downloadable materials on our website. These are provided for informational and educational purposes only.
          </p>
          <p className="mb-4">
            While we strive to ensure that our resources are up-to-date and accurate, we make no warranties or representations regarding the accuracy, reliability, or completeness of any information contained in these resources.
          </p>
          <p>
            You may download and use these resources for your personal or internal business purposes, but you may not redistribute, sell, or commercially exploit these materials without our prior written consent.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Links to Third-Party Websites</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites that are not owned or controlled by Saudi Uniform. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
          </p>
          <p>
            By using our website, you expressly relieve Saudi Uniform from any and all liability arising from your use of any third-party website. We encourage you to be aware when you leave our website and to read the terms and privacy statements of each website that you visit.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
          <p className="mb-4">
            The materials on Saudi Uniform's website are provided on an 'as is' basis. Saudi Uniform makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Further, Saudi Uniform does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p>
            In no event shall Saudi Uniform or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Saudi Uniform's website, even if Saudi Uniform or a Saudi Uniform authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
          <p>
            You agree to indemnify, defend and hold harmless Saudi Uniform, its officers, directors, employees, agents and third parties, for any losses, costs, liabilities and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the site or services, any user postings made by you, your violation of any terms of this Agreement or your violation of any rights of a third party, or your violation of any applicable laws, rules or regulations.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Kingdom of Saudi Arabia, without regard to its conflict of law provisions. Any dispute arising under or relating in any way to these Terms will be resolved exclusively in the courts located in Riyadh, Saudi Arabia.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-2"><strong>Saudi Uniform</strong></p>
            <p className="mb-2">King Fahd Road, Riyadh</p>
            <p className="mb-2">Kingdom of Saudi Arabia</p>
            <p className="mb-2">Email: legal@saudiuniform.com</p>
            <p>Phone: +966 11 123 4567</p>
          </div>
        </div>
      </div>
    </div>
  );
} 