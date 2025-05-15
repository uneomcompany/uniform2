import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Saudi Uniform - Professional Attire in Saudi Arabia',
  description: 'Connect with uniform experts for specialized consultations for your business in the Kingdom of Saudi Arabia.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We're here to help you develop a uniform program that meets your business needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="mb-12">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                  <select 
                    id="sector" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a Sector</option>
                    <option value="transport">Transport</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="industrial">Industrial</option>
                    <option value="hospitality">Hospitality & Restaurants</option>
                    <option value="retail">Retail</option>
                    <option value="aviation">Aviation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full py-3 text-center"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="card p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+966 XX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@uniformblog.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">King Fahd Road, Riyadh</p>
                    <p className="text-gray-600">Kingdom of Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday - Thursday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Friday:</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-lightgray py-12 px-4 -mx-4 rounded-lg mb-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">What is the minimum order quantity?</h3>
              <p className="text-gray-600">
                Minimum order quantities vary depending on the product type and customization required. Typically, our minimum is 10 pieces per product.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">What delivery options are available?</h3>
              <p className="text-gray-600">
                We provide delivery services throughout the Kingdom of Saudi Arabia, and international shipping can also be arranged upon request.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-2">Can I get samples before placing a large order?</h3>
              <p className="text-gray-600">
                Yes, we offer sample services for customers to verify quality and size before placing large orders. A nominal fee is applied to samples, which is deducted from the final order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white p-8 rounded-lg text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let us help you design and implement a uniform program that reflects your brand identity and meets your employees' needs
        </p>
        <Link href="/blog/buying-guides/how-to-choose-reliable-uniform-supplier-saudi-arabia" className="btn-secondary text-lg px-8 py-3 inline-block">
          Learn About Our Services
        </Link>
      </section>
    </div>
  )
} 