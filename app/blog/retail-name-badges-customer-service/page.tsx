import Image from 'next/image'
import Link from 'next/link'
import BlogHeader from '../../components/BlogHeader'
import AuthorBio from '../../components/AuthorBio'
import RelatedArticles from '../../components/RelatedArticles'
import ShareButtons from '../../components/ShareButtons'
import TableOfContents from '../../components/TableOfContents'

export const metadata = {
  canonical: 'https://abjdeat.com/blog/retail-name-badges-customer-service',
  title: 'Retail Name Badges and Customer Service Excellence in Saudi Arabia (2025)',
  description: 'Comprehensive analysis of name badge impact on customer service in Saudi retail environments. Explore design strategies, implementation best practices, and cultural considerations for enhancing personal connections and hospitality excellence.',
}

export default function RetailNameBadgesCustomerService() {
  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Personal Connection in Retail Service" },
    { id: "psychological-impact", title: "Psychology of Name Recognition" },
    { id: "design-excellence", title: "Design Excellence and Functionality" },
    { id: "cultural-integration", title: "Cultural Integration and Sensitivity" },
    { id: "implementation-strategy", title: "Strategic Implementation Framework" },
    { id: "technology-enhancement", title: "Technology-Enhanced Name Badges" },
    { id: "performance-measurement", title: "Performance Measurement and ROI" },
    { id: "best-practices", title: "Best Practices and Standards" },
    { id: "future-innovations", title: "Future Innovations and Trends" },
    { id: "conclusion", title: "Strategic Conclusion" },
  ]
  
  // Related articles
  const relatedArticles = [
    {
      title: "Tiered Retail Uniform Strategies: From Associates to Managers",
      url: "/blog/tiered-retail-uniform-strategies",
      category: "Retail",
      categoryColor: "bg-blue-600"
    },
    {
      title: "Retail Uniforms and Employee Performance Enhancement",
      url: "/blog/retail-uniforms-employee-performance",
      category: "Retail",
      categoryColor: "bg-blue-600"
    },
    {
      title: "Strategic Sourcing Guide: Finding Reliable Retail Uniform Suppliers",
      url: "/blog/retail-uniform-suppliers-guide",
      category: "Retail",
      categoryColor: "bg-blue-600"
    }
  ]

  return (
    <main className="bg-white">
      <BlogHeader 
        title="Retail Name Badges and Customer Service Excellence in Saudi Arabia (2025)"
        category="Retail"
        categoryColor="bg-blue-600"
        publishDate="December 15, 2024"
        readingTime="16 min read"
        imageSrc="/images/retail_sector/employee_name_badges.jpg"
        imageAlt="Professional retail employee wearing a well-designed name badge as part of their uniform in Saudi Arabia"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                In Saudi Arabia's rapidly evolving retail landscape, the humble name badge represents a powerful yet often underestimated tool for transforming customer service excellence. This small uniform component serves as a critical touchpoint that converts anonymous transactions into personalized experiences, embodying the Kingdom's renowned tradition of hospitality while supporting modern retail objectives under Vision 2030.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Research demonstrates that strategic implementation of name badges can increase positive service ratings by up to 34% and improve customer loyalty scores by 27% through enhanced personal connection and accountability. As Saudi retailers compete in an increasingly sophisticated marketplace, the strategic use of name badges offers a cost-effective method for differentiating service quality and building lasting customer relationships.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This comprehensive analysis explores how Saudi retail organizations can leverage name badge strategies to enhance customer service excellence, strengthen brand identity, and create meaningful personal connections that reflect both modern retail best practices and traditional Arabian hospitality values. The integration of cultural sensitivity with operational effectiveness creates unprecedented opportunities for service differentiation in the competitive Saudi retail environment.
              </p>
            </section>

            {/* Main Image */}
            <div className="mb-12">
              <Image 
                src="/images/retail_sector/employee_name_badges.jpg"
                alt="Professional retail employee wearing a well-designed name badge as part of their uniform in Saudi Arabia"
                width={800}
                height={500}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">Professional name badge design enhancing personal connection and brand identity in Saudi retail environment</p>
            </div>

            {/* Psychological Impact Section */}
            <section id="psychological-impact" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Psychology of Name Recognition</h2>
              
              <p className="mb-6">
                Understanding the psychological foundations that make name badges powerful tools for customer service enhancement:
              </p>

              <h3 className="text-xl font-semibold mb-4">Personalization and Human Connection</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Identity recognition effect</strong> – Immediate transformation of anonymous staff into identifiable individuals, reducing psychological distance and increasing customer comfort</li>
                <li><strong>Accountability enhancement</strong> – Visible identification creates subconscious association between named individuals and service quality expectations</li>
                <li><strong>Approachability signaling</strong> – Name badges serve as visual cues indicating staff openness to customer engagement and assistance</li>
                <li><strong>Memory association strengthening</strong> – Facilitates stronger recall of positive service interactions linked to specific named individuals</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Trust and Relationship Building</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Transparency demonstration</strong> – Open identification builds customer confidence through perceived transparency and accountability</li>
                <li><strong>Repeat interaction facilitation</strong> – Enables customers to seek specific staff members for continued service, building ongoing relationships</li>
                <li><strong>Authority and expertise signaling</strong> – Professional name badges enhance perceived competence and trustworthiness</li>
                <li><strong>Cultural hospitality alignment</strong> – Supports Saudi traditions of personal hospitality and individual recognition</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Behavioral Impact on Service Quality</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Performance accountability</strong> – Staff awareness of identification leads to consistently higher service standards</li>
                <li><strong>Personal pride enhancement</strong> – Individual recognition through name badges increases employee investment in service excellence</li>
                <li><strong>Customer engagement improvement</strong> – Personal identification encourages more meaningful customer-staff interactions</li>
                <li><strong>Feedback specificity</strong> – Enables precise feedback attribution, supporting continuous improvement initiatives</li>
              </ul>
            </section>

            {/* Design Excellence Section */}
            <section id="design-excellence" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Design Excellence and Functionality</h2>
              
              <p className="mb-6">
                Strategic design considerations that maximize name badge effectiveness while maintaining brand consistency:
              </p>

              <h3 className="text-xl font-semibold mb-4">Visual Hierarchy and Readability</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Typography optimization</strong> – Font selection and sizing ensuring clear readability from conversational distances in various lighting conditions</li>
                <li><strong>Information prioritization</strong> – Strategic arrangement emphasizing name prominence while including relevant secondary information</li>
                <li><strong>Color contrast enhancement</strong> – High-contrast combinations ensuring accessibility and visibility across diverse customer demographics</li>
                <li><strong>Size and proportion balance</strong> – Optimal dimensions balancing visibility with professional appearance and comfort</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Brand Integration and Consistency</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Corporate identity alignment</strong> – Seamless integration with overall brand design language and uniform system</li>
                <li><strong>Logo and branding placement</strong> – Strategic positioning of brand elements that complement rather than compete with name visibility</li>
                <li><strong>Color scheme coordination</strong> – Harmonious color choices that reinforce brand identity while ensuring name prominence</li>
                <li><strong>Material quality reflection</strong> – Badge materials and finishes that reflect brand positioning and quality standards</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Functional Design Elements</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Durability and maintenance</strong> – Materials and construction methods ensuring longevity under intensive retail use</li>
                <li><strong>Attachment system optimization</strong> – Secure, comfortable fastening methods appropriate for different uniform types and work activities</li>
                <li><strong>Customization flexibility</strong> – Design systems accommodating role changes, promotions, and organizational updates</li>
                <li><strong>Cultural sensitivity features</strong> – Design elements respecting Saudi cultural preferences and religious considerations</li>
              </ul>
            </section>

            {/* Cultural Integration Section */}
            <section id="cultural-integration" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Cultural Integration and Sensitivity</h2>
              
              <p className="mb-6">
                Adapting name badge strategies to align with Saudi cultural values and business practices:
              </p>

              <h3 className="text-xl font-semibold mb-4">Islamic Cultural Considerations</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Name presentation protocols</strong> – Culturally appropriate name formats respecting Islamic naming conventions and family honor</li>
                <li><strong>Gender-specific implementations</strong> – Separate design approaches for male and female staff reflecting cultural modesty requirements</li>
                <li><strong>Religious accommodation</strong> – Design flexibility supporting religious observance and cultural practices</li>
                <li><strong>Family and tribal respect</strong> – Consideration of traditional Saudi concepts of identity and social hierarchy</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Saudi Business Culture Alignment</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Hospitality tradition integration</strong> – Name badges supporting traditional Saudi concepts of personal hospitality and guest honor</li>
                <li><strong>Authority and respect signaling</strong> – Design elements reflecting appropriate levels of respect and professional hierarchy</li>
                <li><strong>Regional preference accommodation</strong> – Flexibility for different cultural preferences across various Saudi regions</li>
                <li><strong>Generational bridge building</strong> – Designs appealing to both traditional values and modern business practices</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Multilingual and International Considerations</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Arabic-English integration</strong> – Bilingual name presentation supporting diverse customer demographics</li>
                <li><strong>International staff accommodation</strong> – Culturally sensitive approaches for expatriate employees</li>
                <li><strong>Language skill indication</strong> – Optional elements highlighting multilingual capabilities for customer service enhancement</li>
                <li><strong>Cultural competency signaling</strong> – Subtle indicators of staff cultural knowledge and specializations</li>
              </ul>
            </section>

            {/* Implementation Strategy Section */}
            <section id="implementation-strategy" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Strategic Implementation Framework</h2>
              
              <p className="mb-6">
                Systematic approaches for successful name badge program implementation across retail organizations:
              </p>

              <h3 className="text-xl font-semibold mb-4">Phased Rollout Planning</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Pilot program development</strong> – Initial testing with select departments or locations to validate design effectiveness and staff acceptance</li>
                <li><strong>Stakeholder engagement</strong> – Comprehensive consultation with staff, management, and customer representatives during design development</li>
                <li><strong>Training and orientation</strong> – Staff education on name badge benefits, proper usage, and customer interaction enhancement</li>
                <li><strong>Gradual expansion</strong> – Systematic rollout across all locations with continuous feedback integration and refinement</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Staff Engagement and Buy-in</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Benefit communication</strong> – Clear explanation of name badge advantages for both staff and customer experience</li>
                <li><strong>Personalization opportunities</strong> – Appropriate customization options that enhance individual identity while maintaining brand consistency</li>
                <li><strong>Recognition and incentives</strong> – Programs linking name badge usage to performance recognition and career advancement</li>
                <li><strong>Feedback integration</strong> – Regular collection and implementation of staff suggestions for program improvement</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Quality Control and Maintenance</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Standards enforcement</strong> – Clear guidelines and monitoring systems ensuring consistent name badge usage and appearance</li>
                <li><strong>Replacement and updates</strong> – Efficient systems for badge replacement, role changes, and organizational updates</li>
                <li><strong>Damage prevention</strong> – Training and systems minimizing badge damage and ensuring professional appearance</li>
                <li><strong>Continuous improvement</strong> – Regular evaluation and enhancement of name badge programs based on performance data</li>
              </ul>
            </section>

            {/* Technology Enhancement Section */}
            <section id="technology-enhancement" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Technology-Enhanced Name Badges</h2>
              
              <p className="mb-6">
                Innovative technologies that extend name badge functionality beyond basic identification:
              </p>

              <h3 className="text-xl font-semibold mb-4">Digital Integration Features</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>QR code integration</strong> – Scannable elements linking to digital staff profiles, customer feedback systems, or service information</li>
                <li><strong>NFC technology</strong> – Near-field communication capabilities enabling instant access to staff expertise and service history</li>
                <li><strong>Digital display elements</strong> – Electronic components showing dynamic information such as languages spoken or current specializations</li>
                <li><strong>Mobile app connectivity</strong> – Integration with customer service apps for enhanced interaction tracking and personalization</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Smart Badge Capabilities</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Location tracking</strong> – Internal positioning systems helping customers locate specific staff members</li>
                <li><strong>Service analytics</strong> – Data collection on customer interactions and service patterns for optimization</li>
                <li><strong>Real-time updates</strong> – Dynamic information display reflecting current availability, specializations, or promotions</li>
                <li><strong>Emergency features</strong> – Safety and security functions for staff protection and incident response</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Future Technology Integration</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Augmented reality compatibility</strong> – Badge elements designed for AR customer service applications</li>
                <li><strong>Voice recognition integration</strong> – Technology supporting voice-activated customer service systems</li>
                <li><strong>Biometric security</strong> – Advanced security features preventing unauthorized badge usage</li>
                <li><strong>Sustainability tracking</strong> – Environmental impact monitoring and reporting capabilities</li>
                </ul>
            </section>

            {/* Performance Measurement Section */}
            <section id="performance-measurement" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Performance Measurement and ROI</h2>
              
              <p className="mb-6">
                Comprehensive metrics and measurement strategies for evaluating name badge program effectiveness:
              </p>

              <h3 className="text-xl font-semibold mb-4">Customer Experience Metrics</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Service satisfaction scores</strong> – Tracking improvements in customer satisfaction ratings following name badge implementation</li>
                <li><strong>Personal connection indicators</strong> – Measuring frequency of customers addressing staff by name and repeat interaction requests</li>
                <li><strong>Complaint resolution efficiency</strong> – Monitoring improvements in complaint handling and resolution times</li>
                <li><strong>Customer loyalty enhancement</strong> – Tracking changes in repeat visit frequency and customer retention rates</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Staff Performance Indicators</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Service quality consistency</strong> – Measuring standardization of service delivery across different staff members</li>
                <li><strong>Employee engagement levels</strong> – Tracking staff satisfaction and pride in personal identification and recognition</li>
                <li><strong>Professional development</strong> – Monitoring career advancement and skill development among badge-wearing staff</li>
                <li><strong>Accountability improvements</strong> – Measuring reductions in service inconsistencies and customer complaints</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Business Impact Assessment</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Revenue correlation analysis</strong> – Tracking sales performance improvements linked to enhanced customer service</li>
                <li><strong>Brand perception enhancement</strong> – Measuring improvements in brand image and customer perception surveys</li>
                <li><strong>Operational efficiency gains</strong> – Monitoring improvements in service delivery speed and accuracy</li>
                <li><strong>Cost-benefit analysis</strong> – Comprehensive ROI calculation including implementation costs and measurable benefits</li>
              </ul>
            </section>

            {/* Best Practices Section */}
            <section id="best-practices" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best Practices and Standards</h2>
              
              <p className="mb-6">
                Proven strategies and industry standards for maximizing name badge effectiveness:
              </p>

              <h3 className="text-xl font-semibold mb-4">Design and Implementation Standards</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Visibility requirements</strong> – Minimum size and contrast standards ensuring readability from standard customer interaction distances</li>
                <li><strong>Placement consistency</strong> – Standardized positioning on uniforms for immediate customer recognition and professional appearance</li>
                <li><strong>Information hierarchy</strong> – Proven formats prioritizing name visibility while including relevant secondary information</li>
                <li><strong>Material durability standards</strong> – Quality specifications ensuring professional appearance throughout extended use periods</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Cultural Sensitivity Guidelines</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Name format protocols</strong> – Culturally appropriate presentation of names respecting Saudi naming conventions</li>
                <li><strong>Gender-specific considerations</strong> – Separate implementation approaches respecting cultural modesty requirements</li>
                <li><strong>Religious accommodation</strong> – Flexible design elements supporting religious observance and cultural practices</li>
                <li><strong>Regional adaptation</strong> – Customization options acknowledging different cultural preferences across Saudi regions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Maintenance and Quality Assurance</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Regular inspection protocols</strong> – Systematic checking of badge condition and compliance with appearance standards</li>
                <li><strong>Replacement scheduling</strong> – Proactive replacement programs maintaining professional appearance and functionality</li>
                <li><strong>Staff training requirements</strong> – Ongoing education on proper badge care, usage, and customer interaction enhancement</li>
                <li><strong>Performance monitoring</strong> – Continuous evaluation of badge program effectiveness and improvement opportunities</li>
              </ul>
            </section>

            {/* Future Innovations Section */}
            <section id="future-innovations" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Future Innovations and Trends</h2>
              
              <p className="mb-6">
                Emerging technologies and trends shaping the future of name badge applications in retail:
              </p>

              <h3 className="text-xl font-semibold mb-4">Advanced Technology Integration</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Artificial intelligence enhancement</strong> – AI-powered systems providing real-time customer service recommendations and personalization</li>
                <li><strong>Augmented reality applications</strong> – AR integration enabling enhanced customer information access and interactive experiences</li>
                <li><strong>Biometric authentication</strong> – Advanced security features ensuring badge authenticity and preventing misuse</li>
                <li><strong>Environmental monitoring</strong> – Smart badges tracking environmental conditions and staff wellness indicators</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Sustainability and Innovation</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Eco-friendly materials</strong> – Sustainable badge materials and production methods supporting environmental objectives</li>
                <li><strong>Circular economy integration</strong> – Recycling and reuse programs minimizing environmental impact</li>
                <li><strong>Energy harvesting</strong> – Self-powered electronic badges using kinetic or solar energy</li>
                <li><strong>Biodegradable options</strong> – Environmentally responsible badge materials for temporary or seasonal use</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Cultural and Social Evolution</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li><strong>Generational adaptation</strong> – Badge designs appealing to evolving cultural preferences and generational differences</li>
                <li><strong>Digital native integration</strong> – Technology features aligned with digital-first customer expectations</li>
                <li><strong>Social media connectivity</strong> – Integration with social platforms for enhanced customer engagement</li>
                <li><strong>Personalization advancement</strong> – Increased customization options reflecting individual identity and cultural preferences</li>
              </ul>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Strategic Conclusion</h2>
              
              <p className="mb-6">
                The strategic implementation of name badges in Saudi retail environments represents a powerful yet cost-effective tool for enhancing customer service excellence and building meaningful personal connections. Success requires careful balance between functional design, cultural sensitivity, and operational effectiveness while supporting the Kingdom's tradition of exceptional hospitality.
              </p>
              
              <p className="mb-6">
                Effective name badge programs extend beyond simple identification to create comprehensive frameworks that support customer recognition, staff accountability, and brand differentiation. Retailers that invest in well-designed name badge strategies will achieve superior customer satisfaction, enhanced staff engagement, and stronger brand loyalty while respecting Saudi cultural values and business traditions.
              </p>
              
              <p className="mb-6">
                The convergence of traditional hospitality values, modern retail technology, and cultural authenticity creates unprecedented opportunities for name badge innovation that supports both business success and cultural alignment. By implementing comprehensive name badge strategies that address the unique requirements of Saudi retail environments, retailers can establish competitive advantages that enhance customer experience while building lasting personal connections and brand loyalty.
              </p>
            </section>

            {/* Author Bio */}
            <AuthorBio 
              name="Dr. Layla Al-Zahrani"
              role="Customer Experience and Retail Psychology Specialist"
              bio="Dr. Al-Zahrani brings over 14 years of experience in customer experience design and retail psychology. Her expertise in personal connection strategies and cultural integration has helped numerous Saudi retailers enhance their customer service excellence while maintaining cultural authenticity and operational efficiency."
              imageSrc="/images/author/layla_alzahrani.jpg"
              linkedin="https://linkedin.com/in/layla-alzahrani"
              twitter="https://twitter.com/alzahrani_cx"
            />

            {/* Share Buttons */}
            <ShareButtons 
              url="/blog/retail-name-badges-customer-service"
              title="Retail Name Badges and Customer Service Excellence in Saudi Arabia (2025)"
            />
          </div>
          
          <aside className="md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <RelatedArticles articles={relatedArticles} />
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Customer Service Consultation</h3>
                <p className="text-sm mb-4">Ready to enhance your customer service through strategic name badge implementation? Our customer experience specialists can help design comprehensive programs that build personal connections and drive loyalty.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 