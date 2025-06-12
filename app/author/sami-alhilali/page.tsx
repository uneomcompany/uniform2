import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'سامي الهلالي | خبير الزي الموحد للنقل الرائد في السعودية | استشاري متخصص',
  description: 'سامي الهلالي - خبير الزي الموحد الرائد للنقل في السعودية مع خبرة 15+ سنة. متخصص في التصميم المتكيف مع المناخ وتقنيات النسيج والحلول الصناعية المتطورة.',
  keywords: 'سامي الهلالي, خبير زي موحد, استشاري نقل السعودية, مصمم زي موحد, متخصص صناعة النقل',
  robots: 'index, follow',
  openGraph: {
    title: 'سامي الهلالي | خبير الزي الموحد للنقل الرائد',
    description: 'استشاري الزي الموحد المتميز مع خبرة 15+ سنة في السعودية',
    type: 'profile',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    images: [
      {
        url: '/images/author/سامي_الهلالي.jpg',
        width: 1200,
        height: 630,
        alt: 'سامي الهلالي - خبير الزي الموحد للنقل'
      }
    ]
  },
  alternates: {
    canonical: 'https://abjdeat.com/author/sami-alhilali',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SamiUniformKSA',
    creator: '@SamiUniformKSA',
    title: 'سامي الهلالي | خبير الزي الموحد للنقل',
    description: 'استشاري الزي الموحد المتميز مع خبرة 15+ سنة في السعودية',
    images: ['/images/author/سامي_الهلالي.jpg']
  }
}

// Enhanced author information with comprehensive details
const author = {
  name: "Sami Al-Hilali",
  arabicName: "سامي عبدالله الهلالي",
  title: "خبير الزي الموحد للنقل الرائد في السعودية",
  role: "استشاري كبير للزي الموحد ومتخصص الصناعة",
  company: "شركة حلول الزي الموحد السعودية",
  location: "الرياض، المملكة العربية السعودية",
  experience: "15+ سنة خبرة متخصصة",
  establishedYear: "2009",
  clientsServed: "200+",
  workersImpacted: "50,000+",
  bio: "سامي الهلالي هو خبير مشهور في تصميم وتنفيذ الزي الموحد لقطاع النقل عبر المملكة العربية السعودية ومنطقة الخليج. مع أكثر من 15 سنة من الخبرة المتخصصة، قام بثورة في معايير الزي الموحد لشركات النقل الكبرى ومشغلي اللوجستيات وإدارات النقل الحكومية. تشمل خبرته تقنيات النسيج المتكيفة مع المناخ، ومبادئ التصميم المريح، والامتثال للوائح السلامة السعودية.",
  image: "/images/author/سامي_الهلالي.jpg",
  socialMedia: {
    linkedin: "https://linkedin.com/in/sami-alhilali-uniform-expert",
    twitter: "https://twitter.com/SamiUniformKSA",
    email: "sami.alhilali@saudiuniformsolutions.com",
    phone: "+966 50 123 4567",
    whatsapp: "+966 50 123 4567",
    website: "https://sami-alhilali-expert.com"
  }
}

export default function SamiAlhilaliPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/patterns/geometric-pattern.svg')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-blue-200 mb-8">
            <Link href="/blog" className="hover:text-white transition-colors">
              المدونة
            </Link>
            <span className="mx-2">/</span>
            <Link href="/author" className="hover:text-white transition-colors">
              الكتّاب
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">سامي الهلالي</span>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Author Image */}
            <div className="md:col-span-4">
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src={author.image}
                    alt={author.arabicName}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{author.clientsServed}</div>
                    <div className="text-xs text-gray-600">شركة خدمت</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{author.experience}</div>
                    <div className="text-xs text-gray-600">سنة خبرة</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="md:col-span-8 text-white">
              <div className="flex items-center mb-4">
                <h1 className="text-4xl md:text-5xl font-bold ml-4">{author.arabicName}</h1>
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                  خبير معتمد
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mb-4">{author.title}</p>
              <p className="text-lg text-blue-200 mb-6">{author.role}</p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">120,000+</div>
                  <div className="text-sm opacity-80">إجمالي المشاهدات</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-80">مقال منشور</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{author.workersImpacted}</div>
                  <div className="text-sm opacity-80">عامل تأثر</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-80">سنة خبرة</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${author.socialMedia.email}?subject=طلب استشارة&body=مرحباً ${author.arabicName}، أود مناقشة خدمات الاستشارة للزي الموحد لمؤسستنا.`}
                  className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  احجز استشارة
                </a>
                <a 
                  href={`https://wa.me/${author.socialMedia.whatsapp.replace(/[^0-9]/g, '')}?text=مرحباً، أود التواصل معك بخصوص الزي الموحد`}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                  </svg>
                  واتساب
                </a>
                <a 
                  href={author.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
                  </svg>
                  لينكد إن
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">نبذة عن الخبير</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{author.bio}</p>
            
            {/* Contact CTA */}
            <div className="mt-12 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative p-12 text-center">
                <div className="absolute inset-0 bg-[url('/images/patterns/geometric-pattern.svg')] opacity-10"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold text-white mb-6">هل تحتاج إلى استشارة متخصصة؟</h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    تواصل مع سامي الهلالي، الخبير الرائد في الزي الموحد للنقل في السعودية، واحصل على حلول مخصصة لمؤسستك
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a 
                      href={`mailto:${author.socialMedia.email}?subject=طلب استشارة متخصصة&body=مرحباً ${author.arabicName}، أود الحصول على استشارة متخصصة للزي الموحد لمؤسستنا.`}
                      className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors inline-flex items-center"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      ابدأ استشارتك الآن
                    </a>
                    <a 
                      href={`https://wa.me/${author.socialMedia.whatsapp.replace(/[^0-9]/g, '')}?text=مرحباً، أحتاج استشارة متخصصة في الزي الموحد`}
                      className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors inline-flex items-center"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                      </svg>
                      واتساب فوري
                    </a>
                    <a 
                      href={`tel:${author.socialMedia.phone}`}
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      {author.socialMedia.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 