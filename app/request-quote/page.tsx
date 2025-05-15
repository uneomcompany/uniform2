import Link from 'next/link';
import Image from 'next/image';
import SafeImage from '../components/SafeImage';
import RequestQuoteForm from '../components/RequestQuoteForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Quote - Transport Sector Uniforms KSA',
  description: 'Request a customized quote for transport sector uniforms in Saudi Arabia. Professional workwear solutions for all transport industry segments.',
  openGraph: {
    title: 'Transport Uniform Quote Request - KSA',
    description: 'Get a tailored quote for your transport sector uniform needs in Saudi Arabia',
    images: ['/images/transport_sector/uniform_consultation.jpeg'],
  },
};

export default function RequestQuote() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Request a Quote for Transport Sector Uniforms
      </h1>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/images/transport_sector/transport_company_uniforms.jpeg"
          alt="Professional transport uniform consultation and quotation services"
          fill
          className="object-cover rounded-lg shadow-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          quality={90}
        />
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Get a customized quote for your transport sector uniform requirements. Our team of experts will analyze your needs and provide a comprehensive solution aligned with Saudi Arabia's industry standards and your specific operational requirements.
        </p>
      </div>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Company Information</h2>
            
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Transport Industry Segment *</label>
              <select
                id="industry"
                name="industry"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select segment</option>
                <option value="public-transport">Public Transport</option>
                <option value="taxi-services">Taxi Services</option>
                <option value="logistics">Logistics & Delivery</option>
                <option value="rail">Train & Rail Operations</option>
                <option value="maritime">Maritime & Port Operations</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="employees" className="block text-sm font-medium text-gray-700">Number of Employees *</label>
              <input
                type="number"
                id="employees"
                name="employees"
                required
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Person Name *</label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Uniform Requirements */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Uniform Requirements</h2>
          
          <div>
            <label htmlFor="uniformTypes" className="block text-sm font-medium text-gray-700">Required Uniform Types *</label>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="uniformTypes" value="standard" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Standard Uniforms</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="uniformTypes" value="safety" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Safety Workwear</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="uniformTypes" value="smart" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Smart Uniforms</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="uniformTypes" value="executive" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Executive Wear</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="features" className="block text-sm font-medium text-gray-700">Required Features</label>
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="features" value="climate" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Climate Control</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="features" value="tracking" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">GPS Tracking</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="features" value="safety" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Safety Sensors</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="checkbox" name="features" value="eco" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                  <span className="ml-2">Eco-Friendly Materials</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">Required Timeline *</label>
            <select
              id="timeline"
              name="timeline"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select timeline</option>
              <option value="immediate">Immediate (1-2 months)</option>
              <option value="quarter">Next Quarter (3-6 months)</option>
              <option value="year">Within a Year</option>
              <option value="planning">Future Planning</option>
            </select>
          </div>

          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Requirements</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Please provide any additional specifications or requirements..."
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-gray-500">* Required fields</p>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition duration-150 ease-in-out"
          >
            Submit Quote Request
          </button>
        </div>
      </form>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">What Happens Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Review</h3>
            <p className="text-sm text-gray-600">Our team will review your requirements within 24 hours</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Consultation</h3>
            <p className="text-sm text-gray-600">We'll schedule a consultation to discuss specific needs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-blue-600 text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Proposal</h3>
            <p className="text-sm text-gray-600">You'll receive a detailed quote and implementation plan</p>
          </div>
        </div>
      </div>
    </div>
  );
} 