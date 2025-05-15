import Image from 'next/image'
import Link from 'next/link'
import BlogHeader from '../../components/BlogHeader'
import AuthorBio from '../../components/AuthorBio'
import RelatedArticles from '../../components/RelatedArticles'
import ShareButtons from '../../components/ShareButtons'
import TableOfContents from '../../components/TableOfContents'

export const metadata = {
  title: 'Meeting Saudi Labor Law Requirements for Protective Industrial Uniforms',
  description: 'Comprehensive guide to navigating Saudi Arabia\'s complex regulatory framework for industrial protective uniforms, featuring detailed compliance requirements, implementation strategies, and practical approaches for meeting 2025 labor law standards.',
}

export default function ArticlePage() {
  // Table of contents data
  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "regulatory-framework", title: "Saudi Regulatory Framework Overview" },
    { id: "standard-requirements", title: "Core Protective Uniform Requirements" },
    { id: "industry-specific", title: "Industry-Specific Compliance Considerations" },
    { id: "implementation-strategies", title: "Compliance Implementation Strategies" },
    { id: "documentation-auditing", title: "Documentation and Auditing Frameworks" },
    { id: "conclusion", title: "Conclusion" },
  ]
  
  // Related articles
  const relatedArticles = [
    {
      title: "Uniform Solutions for Manufacturing Plants and Factories in KSA (2025 Trends)",
      url: "/blog/manufacturing-plant-uniform-solutions",
      category: "Industrial",
      categoryColor: "bg-yellow-600"
    },
    {
      title: "Innovations in Industrial Workwear: Smart Fabrics and Integrated Tech for Saudi Arabia",
      url: "/blog/smart-fabric-industrial-workwear",
      category: "Industrial",
      categoryColor: "bg-yellow-600"
    },
    {
      title: "A Comprehensive Guide to PPE and Uniform Integration for KSA Industrial Safety",
      url: "/blog/ppe-uniform-integration-guide",
      category: "Industrial",
      categoryColor: "bg-yellow-600"
    }
  ]

  return (
    <main className="bg-white">
      <BlogHeader 
        title="Meeting Saudi Labor Law Requirements for Protective Industrial Uniforms"
        category="Industrial"
        categoryColor="bg-yellow-600"
        publishDate="May 15, 2025"
        readingTime="18 min read"
        imageSrc="/images/industrial_sector/protective_clothing.jpeg"
        imageAlt="Compliant industrial uniforms meeting Saudi Arabia's stringent labor regulations while enhancing worker safety and protection across diverse industrial environments"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-3/4">
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <p className="text-lg leading-relaxed mb-6">
                Saudi Arabia's evolving regulatory landscape has transformed industrial uniform compliance from a straightforward issue of providing basic workwear to a complex technical and legal challenge requiring sophisticated understanding of overlapping requirements from multiple authorities. As the Kingdom advances its Vision 2030 objectives while implementing increasingly stringent worker protection standards, organizations across manufacturing, construction, energy, and logistics sectors face growing pressure to ensure every aspect of their protective uniform programs fully satisfies applicable legal obligations.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The complexity of achieving and maintaining compliance stems from multiple factors: the distributed nature of relevant regulations across different government entities, the continuous evolution of standards as Saudi Arabia harmonizes with international frameworks, the significant variations in requirements across different industrial sectors, and the substantial documentation and verification processes necessary to demonstrate adherence during official inspections and audits. For organizations operating across multiple industrial categories or diverse geographical regions within the Kingdom, these challenges multiply further.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This comprehensive analysis provides industrial safety leaders, compliance managers, and procurement specialists with an authoritative guide to navigating Saudi Arabia's protective uniform requirements as of 2025. By examining the current regulatory framework, specific compliance obligations, industry variations, implementation approaches, and documentation systems, we offer practical guidance for developing uniform programs that simultaneously satisfy legal requirements, protect workers, and support operational objectives across the Kingdom's diverse industrial landscape.
              </p>
            </section>

            {/* Main Image */}
            <div className="mb-12">
              <Image 
                src="/images/industrial_sector/protective_clothing.jpeg"
                alt="Compliant industrial uniforms meeting Saudi Arabia's stringent labor regulations while enhancing worker safety and protection across diverse industrial environments"
                width={800}
                height={500}
                className="rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">Regulation-compliant protective uniforms incorporating required safety features while maintaining practicality for Saudi Arabia's diverse industrial sectors</p>
            </div>

            {/* Regulatory Framework Section */}
            <section id="regulatory-framework" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Saudi Regulatory Framework Overview</h2>
              
              <p className="mb-6">
                The interconnected government entities and legislative instruments governing industrial protective uniforms.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Primary Regulatory Authorities</h3>
              
              <p className="mb-6">
                Key government entities establishing and enforcing requirements:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Ministry of Human Resources and Social Development</strong> – Primary authority establishing core labor protection requirements through Labor Law implementation and specialized ministerial decisions</li>
                <li><strong>Saudi Standards, Metrology and Quality Organization (SASO)</strong> – Technical standards body establishing specific performance requirements for protective uniforms and components</li>
                <li><strong>General Authority for Industrial Security</strong> – Specialized requirements applying to high-risk industrial sectors including petrochemicals, mining, and certain manufacturing categories</li>
                <li><strong>Civil Defense directives</strong> – Fire safety and emergency-related protective uniform specifications implemented through Civil Defense regulations</li>
              </ul>
              
              <p className="mb-6">
                The distributed nature of these authorities creates significant compliance complexity—requiring organizations to monitor multiple regulatory channels and reconcile occasionally divergent requirements established by different government entities with overlapping jurisdictions.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Legislative Instruments</h3>
              
              <p className="mb-6">
                Primary legal requirements and their implementation mechanisms:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Saudi Labor Law Articles 121-124</strong> – Foundational requirements establishing employer obligations for worker protection and safety equipment provision</li>
                <li><strong>Ministerial Decision No. 3542/1</strong> – Detailed implementation framework for occupational safety and health requirements including specific protective uniform provisions</li>
                <li><strong>SASO GSO 1651</strong> – Technical specification establishing minimum performance standards for industrial protective clothing across various protection categories</li>
                <li><strong>National Occupational Health and Safety Framework</strong> – Comprehensive standards system integrating sector-specific protective requirements with general safety obligations</li>
              </ul>
              
              <p className="mb-6">
                These legislative instruments establish the structured legal foundation for protective uniform requirements—creating binding obligations that apply to all industrial operations within the Kingdom regardless of size, sector, or location.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Enforcement Mechanism Overview</h3>
              
              <p className="mb-6">
                Systems monitoring and enforcing compliance with established requirements:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Labor inspection protocols</strong> – Systematic site visits conducted by Ministry inspectors specifically evaluating protective uniform provision and utilization</li>
                <li><strong>Compliance certification requirements</strong> – Mandatory documentation demonstrating conformity with applicable SASO standards for protective elements</li>
                <li><strong>Industrial licensing conditions</strong> – Operational permits contingent upon demonstrated adherence to relevant protective uniform regulations</li>
                <li><strong>Violation classification system</strong> – Structured penalty framework establishing financial consequences for non-compliance based on severity categories</li>
              </ul>
              
              <p className="mb-6">
                These enforcement systems have significantly strengthened in recent years—evolving from primarily reactive inspections following incidents to proactive compliance verification programs with substantial consequences for organizations failing to meet their protective uniform obligations.
              </p>
            </section>

            {/* Core Requirements Section */}
            <section id="standard-requirements" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Core Protective Uniform Requirements</h2>
              
              <p className="mb-6">
                Fundamental compliance obligations applicable across industrial sectors.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Provision and Accessibility Standards</h3>
              
              <p className="mb-6">
                Employer obligations regarding uniform availability:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Full employer cost responsibility</strong> – Explicit prohibition of any direct or indirect charging of employees for required protective uniforms or components</li>
                <li><strong>Size range adequacy</strong> – Obligation to maintain sufficient inventory covering the full anthropometric range of the workforce without exceptional size delays</li>
                <li><strong>Replacement protocols</strong> – Requirements for timely provision of substitute garments when damage, contamination, or wear compromises protective function</li>
                <li><strong>Temporary worker coverage</strong> – Extension of all uniform provision requirements to non-permanent personnel including contractors and casual labor</li>
              </ul>
              
              <p className="mb-6">
                These provision standards establish the fundamental principle that protective uniform access is an absolute employer obligation—addressing the reality that effective protection requires not just theoretical availability but practical accessibility across all work scenarios.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Minimum Protection Performance</h3>
              
              <p className="mb-6">
                Technical requirements applicable to all industrial protective uniforms:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Baseline flame resistance</strong> – Minimum fire retardancy standards applicable even in environments without explicit thermal hazard identification</li>
                <li><strong>Mandatory visibility elements</strong> – Required high-visibility components ensuring worker detection across variable lighting conditions</li>
                <li><strong>Fundamental durability standards</strong> – Minimum performance requirements for abrasion, tear, and tensile strength ensuring protection maintenance through normal use</li>
                <li><strong>Identification requirements</strong> – Standardized worker and organization identification elements facilitating accountability and emergency response</li>
              </ul>
              
              <p className="mb-6">
                These protection standards establish the minimum functional requirements for industrial uniforms—creating a baseline performance level below which no protective workwear can fall regardless of specific industrial application or perceived hazard level.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Climatic Adaptation Requirements</h3>
              
              <p className="mb-6">
                Mandatory considerations addressing Saudi Arabia's environmental conditions:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Heat stress prevention provisions</strong> – Explicit requirements for uniforms to incorporate features mitigating thermal burden while maintaining protection</li>
                <li><strong>Seasonal adaptation obligations</strong> – Requirements for adjusted uniform configurations appropriate to temperature variations throughout the year</li>
                <li><strong>Hydration compatibility</strong> – Mandatory design elements facilitating water access and encouraging regular consumption during work activities</li>
                <li><strong>UV protection integration</strong> – Required protective elements addressing Saudi Arabia's extreme solar radiation exposure for outdoor operations</li>
              </ul>
              
              <p className="mb-6">
                These climatic requirements acknowledge Saudi Arabia's challenging environmental conditions—recognizing that uniforms must address not only traditional industrial hazards but also the significant physiological challenges posed by the Kingdom's extreme climate.
              </p>
            </section>

            {/* Industry-Specific Section */}
            <section id="industry-specific" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Industry-Specific Compliance Considerations</h2>
              
              <p className="mb-6">
                Specialized requirements applying to particular industrial sectors or activities.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Oil and Gas Sector Requirements</h3>
              
              <p className="mb-6">
                Enhanced standards for petroleum industry operations:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Advanced flame resistance certification</strong> – Enhanced thermal protection standards exceeding general industrial requirements with specific testing protocols</li>
                <li><strong>Hydrocarbon-specific chemical resistance</strong> – Specialized protection against petroleum compounds based on exposure probability assessments</li>
                <li><strong>Static dissipation requirements</strong> – Mandatory anti-static properties preventing ignition hazards in potentially explosive atmospheres</li>
                <li><strong>Saudi Aramco specification alignment</strong> – Harmonization with the national oil company's detailed protective clothing standards</li>
              </ul>
              
              <p className="mb-6">
                These petroleum industry requirements establish significantly higher protection thresholds—acknowledging the elevated hazard profile of oil and gas operations and the catastrophic potential of safety failures in these environments.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Construction and Infrastructure Standards</h3>
              
              <p className="mb-6">
                Specialized requirements for building and infrastructure development:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Enhanced impact protection</strong> – Specific requirements for protective reinforcement in areas vulnerable to strikes, falls, and compression</li>
                <li><strong>Elevated visibility standards</strong> – Higher-grade retroreflective requirements for workers in proximity to vehicles and equipment</li>
                <li><strong>Height work specialization</strong> – Specific uniform adaptations supporting compatibility with fall protection systems</li>
                <li><strong>Identification hierarchies</strong> – Visual classification systems identifying worker roles, specializations, and authority levels</li>
              </ul>
              
              <p className="mb-6">
                These construction-specific requirements address the unique hazard profile of building activities—focusing on the high-consequence risks of struck-by incidents, falls, and the coordination challenges of complex multi-employer worksites common in Saudi development projects.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Manufacturing Sector Variations</h3>
              
              <p className="mb-6">
                Differentiated requirements across manufacturing categories:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Process-specific chemical protection</strong> – Tailored resistance requirements based on specific substances present in different manufacturing operations</li>
                <li><strong>Task-based cut resistance</strong> – Graduated protection levels for different activities based on mechanical hazard assessments</li>
                <li><strong>Clean room compatibility</strong> – Specialized requirements for manufacturing environments with contamination control requirements</li>
                <li><strong>Machinery entanglement prevention</strong> – Design specifications addressing capture and draw-in hazards from specific equipment types</li>
              </ul>
              
              <p className="mb-6">
                These manufacturing variations acknowledge the diversity within this broad sector—recognizing that protection requirements differ substantially between industries as diverse as food processing, electronics manufacturing, metalworking, and pharmaceutical production.
              </p>
            </section>

            {/* Implementation Strategies Section */}
            <section id="implementation-strategies" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Compliance Implementation Strategies</h2>
              
              <p className="mb-6">
                Practical approaches for ensuring protective uniform regulatory adherence.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Assessment and Specification Methodologies</h3>
              
              <p className="mb-6">
                Structured approaches for determining compliance requirements:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Regulatory mapping processes</strong> – Comprehensive identification of all applicable requirements from distributed authorities applicable to specific operations</li>
                <li><strong>Hazard-based assessment protocols</strong> – Systematic evaluation methodologies identifying protection needs beyond minimum regulatory requirements</li>
                <li><strong>Technical specification development</strong> – Structured processes translating regulatory obligations into detailed procurement documents</li>
                <li><strong>Cross-functional review systems</strong> – Collaborative evaluation involving safety, legal, operational, and procurement perspectives</li>
              </ul>
              
              <p className="mb-6">
                These assessment methodologies ensure comprehensive compliance identification—preventing the common situation where major regulatory obligations are overlooked due to their distribution across multiple authorities or technical documents.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Certification and Verification Systems</h3>
              
              <p className="mb-6">
                Processes confirming uniform compliance with applicable standards:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Product certification validation</strong> – Authentication systems confirming legitimate certification of protective garments and components</li>
                <li><strong>Acceptance testing protocols</strong> – Sampling and verification procedures confirming delivered products meet specified requirements</li>
                <li><strong>Performance monitoring systems</strong> – Ongoing assessment confirming maintained compliance throughout service life</li>
                <li><strong>Non-compliant product management</strong> – Structured procedures for handling, reporting, and replacing items identified as not meeting requirements</li>
              </ul>
              
              <p className="mb-6">
                These verification systems provide objective evidence of compliance—creating the documented assurance necessary to demonstrate regulatory adherence during inspections while preventing counterfeit or substandard protective equipment from entering service.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Workforce Integration Approaches</h3>
              
              <p className="mb-6">
                Strategies ensuring effective implementation through proper utilization:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Compliance education programs</strong> – Comprehensive training explaining the protective purpose of specific uniform requirements beyond simple rule enforcement</li>
                <li><strong>Cultural sensitivity adaptation</strong> – Appropriate modifications addressing Saudi social norms while maintaining required protection</li>
                <li><strong>Supervisor accountability systems</strong> – Clear responsibility frameworks establishing management obligations for ensuring proper uniform utilization</li>
                <li><strong>Feedback integration mechanisms</strong> – Structured channels capturing worker input regarding comfort, functionality, and improvement opportunities</li>
              </ul>
              
              <p className="mb-6">
                These integration approaches acknowledge that technical compliance alone is insufficient—recognizing that actual protection requires proper utilization, which depends on workforce understanding, acceptance, and practical usability of protective uniforms.
              </p>
            </section>

            {/* Documentation Section */}
            <section id="documentation-auditing" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Documentation and Auditing Frameworks</h2>
              
              <p className="mb-6">
                Record-keeping systems supporting verification of regulatory compliance.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Required Documentation Systems</h3>
              
              <p className="mb-6">
                Mandatory records demonstrating adherence to regulatory obligations:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Provision verification records</strong> – Documentation confirming timely issuance of appropriate protective uniforms to all personnel within scope</li>
                <li><strong>Technical compliance certification</strong> – Manufacturer documentation confirming adherence to applicable SASO and international standards</li>
                <li><strong>Training completion evidence</strong> – Records verifying worker education regarding proper uniform use, limitations, and maintenance</li>
                <li><strong>Inspection and maintenance logs</strong> – Documentation of regular condition assessment and corrective actions taken for degraded items</li>
              </ul>
              
              <p className="mb-6">
                These documentation requirements establish the fundamental principle that compliance must be verifiable—creating the objective evidence necessary to demonstrate adherence during regulatory inspections and following any workplace incidents.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Internal Audit Methodologies</h3>
              
              <p className="mb-6">
                Proactive verification systems ensuring maintained compliance:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Compliance verification protocols</strong> – Structured assessment processes evaluating all aspects of protective uniform programs against current requirements</li>
                <li><strong>Random sampling methodologies</strong> – Statistical approaches confirming consistent protection across different work areas, shifts, and personnel categories</li>
                <li><strong>Management system integration</strong> – Incorporation of uniform compliance verification within broader safety audit frameworks</li>
                <li><strong>Corrective action tracking</strong> – Systems ensuring identified deficiencies receive appropriate resolution within established timeframes</li>
              </ul>
              
              <p className="mb-6">
                These audit approaches shift compliance from reactive to proactive—enabling organizations to identify and address gaps before they become regulatory violations or contribute to workplace injuries across Saudi operations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Regulatory Inspection Preparation</h3>
              
              <p className="mb-6">
                Strategic approaches for successfully demonstrating compliance:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Documentation organization systems</strong> – Structured frameworks ensuring rapid access to required records during unannounced regulatory visits</li>
                <li><strong>Compliance narrative development</strong> – Preparation of clear explanations connecting specific protective measures to applicable requirements</li>
                <li><strong>Visual verification preparation</strong> – Organized approach for demonstrating proper uniform implementation across various operational areas</li>
                <li><strong>Workforce communication readiness</strong> – Preparation ensuring employees can accurately explain protective uniform elements and their purpose</li>
              </ul>
              
              <p className="mb-6">
                These preparation strategies enhance inspection outcomes—recognizing that demonstrated compliance depends not only on actual adherence but also on the ability to effectively communicate and verify that adherence to regulatory authorities during site visits.
              </p>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Conclusion: Strategic Compliance as Operational Advantage</h2>
              
              <p className="mb-6">
                For industrial organizations operating in Saudi Arabia, navigating the complex regulatory landscape governing protective uniforms represents both a significant challenge and a strategic opportunity. While the distributed nature of requirements across multiple authorities and the continuous evolution of standards create compliance complexity, organizations that develop sophisticated approaches to meeting these obligations position themselves for multiple operational advantages: enhanced worker protection reducing injury rates and associated costs, strengthened regulatory relationships supporting operational stability, and improved workforce satisfaction contributing to talent retention in competitive labor markets.
              </p>
              
              <p className="mb-6">
                The most effective compliance approaches integrate multiple dimensions: comprehensive regulatory monitoring identifying all applicable requirements, technical specification systems translating obligations into procurement parameters, verification frameworks confirming actual performance, documentation systems supporting defensible compliance demonstration, and workforce integration approaches ensuring proper utilization. This multifaceted perspective transforms protective uniform compliance from a regulatory burden to a strategic program supporting broader organizational objectives.
              </p>
              
              <p className="mb-6">
                For Saudi industrial leaders navigating the Kingdom's increasingly stringent regulatory environment, investment in sophisticated protective uniform compliance systems represents a high-return opportunity to simultaneously satisfy legal obligations, enhance workforce protection, and support operational performance. By implementing the structured approaches outlined in this analysis, forward-thinking organizations can achieve not just minimal compliance but comprehensive regulatory excellence—establishing foundations for industrial operations that meet the highest standards while advancing Saudi Arabia's vision for world-class workplace safety across its rapidly developing industrial landscape.
              </p>
            </section>

            {/* Author Bio */}
            <AuthorBio 
              name="Adv. Nasser Al-Harbi"
              role="Industrial Compliance Specialist"
              bio="With extensive expertise in Saudi labor law and industrial compliance requirements, Adv. Al-Harbi helps organizations navigate complex regulatory frameworks while developing practical implementation strategies that enhance both legal adherence and operational performance."
              imageSrc="/images/author/ناصر_الحربي.jpg"
              linkedin="https://linkedin.com/in/nasser-alharbi"
              twitter="https://twitter.com/alharbi_nasser"
            />

            {/* Share Buttons */}
            <ShareButtons 
              url="/blog/labor-law-protective-uniforms"
              title="Meeting Saudi Labor Law Requirements for Protective Industrial Uniforms"
            />
          </div>

          <aside className="md:w-1/4">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
              
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Related Articles</h3>
                <RelatedArticles articles={relatedArticles} />
              </div>

              <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Request Compliance Consultation</h3>
                <p className="text-sm mb-4">Our regulatory specialists can help your organization develop comprehensive compliance strategies ensuring your protective uniform programs fully satisfy all applicable Saudi labor law requirements.</p>
                <Link href="/contact" className="block text-center py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
                  Contact Our Team
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
} 