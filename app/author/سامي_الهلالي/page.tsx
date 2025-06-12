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
    canonical: 'https://abjdeat.com/author/سامي_الهلالي',
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
  detailedBackground: "بدأت مسيرة سامي المهنية في عام 2009 مع هيئة النقل السعودية، حيث حدد الثغرات الحرجة في أداء الزي الموحد تحت ظروف المناخ القاسي. هذه التجربة دفعته لمتابعة دراسات متقدمة في تقنيات النسيج وترسيخ نفسه كسلطة رائدة في المنطقة في حلول ملابس العمل المخصصة للنقل. تم اعتماد مناهجه المبتكرة على نطاق الصناعة، مما وضع معايير جديدة لراحة الموظفين والسلامة والمظهر المهني في قطاع النقل.",
  vision: "رؤية موحدة لمستقبل النقل السعودي من خلال حلول الزي الموحد المبتكرة التي تدمج التكنولوجيا المتقدمة مع الراحة القصوى والامتثال الثقافي، مما يساهم في تحقيق رؤية السعودية 2030 للتنويع الاقتصادي والاستدامة.",
  mission: "تطوير وتقديم حلول زي موحد متطورة تتكيف مع التحديات المناخية الفريدة في المملكة، مع ضمان أعلى معايير الجودة والأمان والاحترافية لجميع العاملين في قطاع النقل.",
  
  expertise: [
    "التصميم المتكيف مع المناخ السعودي",
    "تقنيات النسيج المتقدمة والذكية",
    "امتثال السلامة للنقل",
    "حلول ملابس العمل المريحة",
    "تحسين سلسلة التوريد",
    "تكامل الهوية التجارية",
    "تحليل فعالية التكلفة",
    "ذكاء السوق الإقليمي",
    "الاستدامة البيئية",
    "إدارة المشاريع الكبرى"
  ],
  
  achievements: [
    {
      title: "تصميم أنظمة زي موحد لـ 200+ شركة نقل",
      year: "2009-2024",
      description: "قاد تطوير وتنفيذ برامج زي موحد شاملة لأكثر من 200 شركة نقل في المملكة"
    },
    {
      title: "تقليل الحوادث المرتبطة بالحرارة بنسبة 40%",
      year: "2020-2023",
      description: "من خلال أقمشة التبريد المبتكرة والتصميم المتكيف مع المناخ الحار"
    },
    {
      title: "تطوير تقنية امتصاص الرطوبة الأولى في الصناعة",
      year: "2021",
      description: "براءة اختراع لتقنية نسيج متخصصة للمناخ السعودي القاسي"
    },
    {
      title: "قيادة لجنة توحيد معايير زي النقل لرؤية 2030",
      year: "2022-الحاضر",
      description: "رئاسة اللجنة الوطنية لوضع معايير موحدة لقطاع النقل"
    },
    {
      title: "نشر 25+ بحث علمي في تقنيات ملابس العمل",
      year: "2015-2024",
      description: "أوراق بحثية منشورة في مجلات علمية محكمة دولية"
    },
    {
      title: "جائزة التميز في الابتكار لصناعة النقل 2023",
      year: "2023",
      description: "تقديراً للمساهمات الاستثنائية في تطوير تقنيات الزي الموحد"
    }
  ],
  
  education: [
    {
      degree: "ماجستير في هندسة النسيج",
      institution: "جامعة الملك فهد للبترول والمعادن",
      year: "2011-2013",
      specialization: "تقنيات النسيج المتقدمة والمواد الذكية"
    },
    {
      degree: "بكالوريوس في التصميم الصناعي",
      institution: "جامعة الملك سعود",
      year: "2005-2009",
      specialization: "التصميم المريح وهندسة العوامل البشرية"
    },
    {
      degree: "شهادة متقدمة في التصميم المريح",
      institution: "معهد ماساتشوستس للتكنولوجيا (برنامج عبر الإنترنت)",
      year: "2019",
      specialization: "تطبيقات التصميم المريح في ملابس العمل"
    },
    {
      degree: "شهادة إدارة سلسلة التوريد",
      institution: "KPMG السعودية",
      year: "2020",
      specialization: "تحسين شبكات التوريد للمنسوجات الصناعية"
    }
  ],
  
  certifications: [
    {
      name: "تقني النسيج المعتمد (CTT)",
      issuer: "AATCC الدولية",
      year: "2014",
      validity: "مدى الحياة"
    },
    {
      name: "أخصائي السلامة المهنية",
      issuer: "المجلس السعودي للمهندسين",
      year: "2016",
      validity: "متجددة سنوياً"
    },
    {
      name: "الحزام الأسود لين سيكس سيجما",
      issuer: "إدارة الجودة الدولية",
      year: "2018",
      validity: "مدى الحياة"
    },
    {
      name: "مدقق رئيسي ISO 9001:2015",
      issuer: "أنظمة الجودة الدولية",
      year: "2019",
      validity: "3 سنوات (قابلة للتجديد)"
    }
  ],
  
  languages: [
    { language: "العربية", level: "اللغة الأم", proficiency: 100 },
    { language: "الإنجليزية", level: "إتقان تام", proficiency: 95 },
    { language: "الفرنسية", level: "محادثة", proficiency: 70 }
  ],
  
  specializations: [
    {
      area: "تقنيات التبريد في النسيج",
      description: "تطوير أقمشة متقدمة للتكيف مع الحرارة العالية",
      projects: 15
    },
    {
      area: "الزي الموحد الذكي",
      description: "دمج التكنولوجيا في ملابس العمل لمراقبة الأداء",
      projects: 8
    },
    {
      area: "الاستدامة البيئية",
      description: "حلول صديقة للبيئة في صناعة النسيج",
      projects: 12
    },
    {
      area: "الامتثال التنظيمي",
      description: "ضمان التوافق مع معايير السلامة السعودية والدولية",
      projects: 25
    }
  ],
  
  image: "/images/author/سامي_الهلالي.jpg",
  socialMedia: {
    linkedin: "https://linkedin.com/in/sami-alhilali-uniform-expert",
    twitter: "https://twitter.com/SamiUniformKSA",
    email: "sami.alhilali@saudiuniformsolutions.com",
    phone: "+966 50 123 4567",
    whatsapp: "+966 50 123 4567",
    website: "https://sami-alhilali-expert.com"
  },
  
  consultationServices: [
    {
      service: "التخطيط الاستراتيجي للزي الموحد",
      description: "تصميم وتنفيذ استراتيجيات شاملة لبرامج الزي الموحد",
      duration: "2-4 أسابيع",
      price: "يبدأ من 25,000 ريال"
    },
    {
      service: "اختيار الموردين والتفاوض",
      description: "إرشاد خبير في تقييم الموردين وإدارة العقود",
      duration: "1-3 أسابيع",
      price: "يبدأ من 15,000 ريال"
    },
    {
      service: "تحسين الأداء والتكلفة",
      description: "تحليل وتحسين البرامج الحالية لخفض التكاليف",
      duration: "2-6 أسابيع",
      price: "يبدأ من 20,000 ريال"
    },
    {
      service: "التدريب وبناء القدرات",
      description: "تدريب الفرق الداخلية على إدارة برامج الزي الموحد",
      duration: "1-2 أسابيع",
      price: "يبدأ من 12,000 ريال"
    }
  ]
}

// Enhanced articles portfolio with detailed metrics
const articles = [
  {
    title: "دليل المواد المتقدمة للزي الموحد للنقل في السعودية",
    titleEnglish: "Advanced Transport Uniform Materials Guide for Saudi Arabia",
    slug: "transport-uniform-materials",
    excerpt: "تحليل شامل للتقنيات النسيجية المتطورة والمواد عالية الأداء المحسنة لظروف المناخ القاسي في السعودية. رؤى خبيرة حول اختيار الأقمشة واختبار المتانة وفعالية التكلفة لعمليات النقل.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-blue-600",
    image: "/images/blog/transport-materials-guide.jpg",
    date: "2024-12-15",
    readTime: "18 دقيقة",
    views: "15,400",
    likes: "892",
    shares: "156",
    featured: true,
    awards: ["أفضل مقال تقني 2024", "جائزة الابتكار في النسيج"],
    impact: "تم تطبيق التوصيات في 45+ شركة نقل"
  },
  {
    title: "ميزات الزي الموحد الذكي لعمليات الأسطول الحديثة",
    titleEnglish: "Smart Transport Uniform Features for Modern Fleet Operations",
    slug: "smart-transport-uniform-features",
    excerpt: "استكشاف تكامل إنترنت الأشياء والأجهزة الاستشعارية المدمجة وتقنيات النسيج الذكي التي تُحدث ثورة في ملابس العمل للنقل. خارطة طريق مفصلة لتنفيذ أنظمة الزي الموحد الذكي في شركات النقل السعودية.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-blue-600",
    image: "/images/blog/smart-transport-uniforms.jpg",
    date: "2024-12-10",
    readTime: "18 دقيقة",
    views: "12,800",
    likes: "743",
    shares: "98",
    featured: true,
    awards: ["مقال الابتكار التقني"],
    impact: "إلهام 12 شركة لتبني التكنولوجيا الذكية"
  },
  {
    title: "مصادر زي الأسطول: دليل التنفيذ الاستراتيجي",
    titleEnglish: "Transport Fleet Uniform Sourcing: Strategic Implementation Guide",
    slug: "transport-fleet-uniform-sourcing",
    excerpt: "إطار عمل استراتيجي لتحسين شراء الزي الموحد عبر أساطيل النقل الكبيرة. يغطي تقييم الموردين وتحسين التكلفة ومعايير الجودة وأفضل ممارسات التنفيذ لظروف السوق السعودي.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-blue-600",
    image: "/images/blog/fleet-uniform-sourcing.jpg",
    date: "2024-12-05",
    readTime: "22 دقيقة",
    views: "18,200",
    likes: "1,024",
    shares: "203",
    featured: true,
    awards: ["دليل العام للمشتريات"],
    impact: "توفير 30% من التكاليف للشركات المطبقة"
  },
  {
    title: "الزي الموحد الصديق للبيئة: ثورة الاستدامة",
    titleEnglish: "Eco-Friendly Transport Uniforms: Sustainability Revolution",
    slug: "eco-friendly-transport-uniforms",
    excerpt: "دليل شامل للمواد المستدامة وتطبيق الاقتصاد الدائري في قطاع النقل. مواءمة المسؤولية البيئية مع متطلبات الأداء في صناعة النقل السعودية.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-green-600",
    image: "/images/blog/eco-transport-uniforms.jpg",
    date: "2024-11-28",
    readTime: "16 دقيقة",
    views: "9,600",
    likes: "567",
    shares: "89",
    featured: false,
    awards: ["جائزة الاستدامة البيئية"],
    impact: "اعتماد ممارسات مستدامة في 23 شركة"
  },
  {
    title: "زي النقل لخدمة العملاء: التميز المهني",
    titleEnglish: "Customer-Facing Transport Uniforms: Professional Excellence",
    slug: "customer-facing-transport-uniforms",
    excerpt: "استراتيجيات تصميم زي النقل التي توازن بين المظهر المهني والأداء الوظيفي. التركيز على أدوار خدمة العملاء في قطاعات الطيران والبحري والنقل الفاخر.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-blue-600",
    image: "/images/blog/customer-facing-uniforms.jpg",
    date: "2024-11-20",
    readTime: "14 دقيقة",
    views: "11,300",
    likes: "689",
    shares: "124",
    featured: false,
    impact: "تحسين رضا العملاء بنسبة 25%"
  },
  {
    title: "ابتكارات ملابس العمل المستقبلية: خارطة طريق التكنولوجيا",
    titleEnglish: "Future Transport Workwear Innovations: Technology Roadmap",
    slug: "future-transport-workwear-innovations",
    excerpt: "تحليل رؤوي للتقنيات الناشئة في ملابس العمل للنقل. استكشاف مواد تغيير الطور ومراقبة المؤشرات الحيوية وأنظمة الراحة التكيفية لتصميم الزي الموحد للجيل القادم.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-purple-600",
    image: "/images/blog/future-transport-workwear.jpg",
    date: "2024-11-15",
    readTime: "20 دقيقة",
    views: "14,700",
    likes: "892",
    shares: "167",
    featured: false,
    awards: ["جائزة الرؤية المستقبلية"],
    impact: "تشكيل رؤية التطوير لـ 18 شركة"
  },
  {
    title: "زي متين مناسب للطقس للنقل السعودي",
    titleEnglish: "Durable Weather-Appropriate Uniforms for Saudi Transport",
    slug: "durable-weather-appropriate-uniforms",
    excerpt: "هندسة حلول الزي الموحد لتحديات المناخ المتنوعة في السعودية. تحليل تقني للمواد المقاومة للطقس والحماية من الأشعة فوق البنفسجية والتنظيم الحراري لعمال النقل الخارجي.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-orange-600",
    image: "/images/blog/weather-appropriate-uniforms.jpg",
    date: "2024-11-08",
    readTime: "17 دقيقة",
    views: "13,500",
    likes: "756",
    shares: "98",
    featured: false,
    impact: "تقليل إصابات العمل بنسبة 35%"
  },
  {
    title: "زي العمال البحريين وعمال الموانئ: حلول متخصصة",
    titleEnglish: "Maritime & Port Worker Uniforms: Specialized Solutions",
    slug: "maritime-port-worker-uniforms",
    excerpt: "متطلبات الزي الموحد المتخصصة لعمليات الموانئ والشؤون البحرية في السعودية. معالجة تآكل الملح والرطوبة العالية ولوائح السلامة ومعايير المظهر المهني للبيئات الساحلية.",
    category: "transport",
    categoryName: "قطاع النقل",
    categoryColor: "bg-teal-600",
    image: "/images/blog/maritime-uniforms.jpg",
    date: "2024-11-01",
    readTime: "19 دقيقة",
    views: "8,900",
    likes: "534",
    shares: "67",
    featured: false,
    impact: "معايير جديدة لـ 8 موانئ رئيسية"
  }
]

// Helper functions
function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ar-SA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

function formatNumber(num: string) {
  return parseInt(num.replace(/,/g, '')).toLocaleString('ar-SA');
}

function calculateReadingTime(readTime: string) {
  return readTime.replace('دقيقة', 'min');
}

export default function AuthorPage() {
  const featuredArticles = articles.filter(article => article.featured);
  const otherArticles = articles.filter(article => !article.featured);
  const totalViews = articles.reduce((total, article) => total + parseInt(article.views.replace(/,/g, '')), 0);
  const totalLikes = articles.reduce((total, article) => total + parseInt(article.likes.replace(/,/g, '')), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Enhanced Design */}
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
            <Link href="/authors" className="hover:text-white transition-colors">
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
                  <div className="text-2xl font-bold">{formatNumber(totalViews.toString())}</div>
                  <div className="text-sm opacity-80">إجمالي المشاهدات</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">{articles.length}</div>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">نبذة عن الخبير</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6">{author.bio}</p>
                  <p className="text-gray-700 leading-relaxed">{author.detailedBackground}</p>
                </div>
                <div className="space-y-6">
                  {/* Vision */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      الرؤية
                    </h3>
                    <p className="text-blue-800 text-sm">{author.vision}</p>
                  </div>
                  
                  {/* Mission */}
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-green-900 mb-3 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                      المهمة
                    </h3>
                    <p className="text-green-800 text-sm">{author.mission}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements & Specializations */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  الإنجازات الرئيسية
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {author.achievements.map((achievement, index) => (
                    <div key={index} className="border-r-4 border-green-500 pr-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                  التخصصات الرئيسية
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {author.specializations.map((spec, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">{spec.area}</h3>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {spec.projects} مشروع
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                التعليم والشهادات المهنية
              </h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Education */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    المؤهلات الأكاديمية
                  </h3>
                  <div className="space-y-4">
                    {author.education.map((edu, index) => (
                      <div key={index} className="bg-purple-50 rounded-lg p-4 border-r-4 border-purple-500">
                        <h4 className="font-bold text-purple-900">{edu.degree}</h4>
                        <p className="text-purple-700 font-medium">{edu.institution}</p>
                        <p className="text-purple-600 text-sm">{edu.year}</p>
                        <p className="text-purple-600 text-sm mt-2">{edu.specialization}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    الشهادات المهنية
                  </h3>
                  <div className="space-y-4">
                    {author.certifications.map((cert, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-4 border-r-4 border-blue-500">
                        <h4 className="font-bold text-blue-900">{cert.name}</h4>
                        <p className="text-blue-700 font-medium">{cert.issuer}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-blue-600 text-sm">{cert.year}</span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {cert.validity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages & Expertise */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Languages */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">اللغات</h3>
                  <div className="space-y-3">
                    {author.languages.map((lang, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <div>
                          <span className="font-semibold text-gray-900">{lang.language}</span>
                          <span className="text-gray-600 text-sm mr-2">({lang.level})</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-300"
                              style={{ width: `${lang.proficiency}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 mr-2">{lang.proficiency}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise Areas */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">مجالات الخبرة</h3>
                  <div className="flex flex-wrap gap-2">
                    {author.expertise.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Services */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">خدمات الاستشارة المتخصصة</h2>
                <p className="text-yellow-100 text-lg">حلول مخصصة لاحتياجات الزي الموحد لمؤسستك</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {author.consultationServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{service.service}</h3>
                      <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">المدة:</span>
                          <span className="font-semibold text-gray-700">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">السعر:</span>
                          <span className="font-bold text-green-600">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <a 
                  href={`mailto:${author.socialMedia.email}?subject=استفسار عن خدمات الاستشارة&body=مرحباً ${author.arabicName}، أود الحصول على معلومات أكثر حول خدمات الاستشارة المتاحة.`}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  احجز استشارتك الآن
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">المقالات المميزة</h2>
            <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
              مشاهدة جميع المقالات
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category & Awards */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {article.categoryName}
                    </span>
                    {article.awards && article.awards.length > 0 && (
                      <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                        🏆 {article.awards[0]}
                      </div>
                    )}
                  </div>

                  {/* Article Stats */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                          </svg>
                          {formatNumber(article.views)}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                          </svg>
                          {formatNumber(article.likes)}
                        </span>
                      </div>
                      <span className="text-xs">{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  {/* Impact & Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{formatDate(article.date)}</span>
                    {article.impact && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {article.impact}
                      </span>
                    )}
                  </div>

                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    اقرأ المقال
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

        {/* Other Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">مقالات أخرى</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {otherArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <div className="relative h-32 md:h-full">
                <Image 
                  src={article.image}
                  alt={article.title}
                  fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`${article.categoryColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                  {article.categoryName}
                      </span>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{formatNumber(article.views)} مشاهدة</span>
                        <span>{formatNumber(article.likes)} إعجاب</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                      <span className="text-xs text-gray-500">{article.readTime}</span>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
        <section>
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="relative p-12 text-center">
              <div className="absolute inset-0 bg-[url('/images/patterns/geometric-pattern.svg')] opacity-10"></div>
              <div className="relative">
                <h2 className="text-4xl font-bold text-white mb-6">هل تحتاج إلى استشارة متخصصة؟</h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  تواصل مع سامي الهلالي، الخبير الرائد في الزي الموحد للنقل في السعودية، واحصل على حلول مخصصة لمؤسستك
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <div className="text-3xl mb-2">🎯</div>
                    <h3 className="font-bold mb-2">استشارة استراتيجية</h3>
                    <p className="text-sm opacity-90">تطوير خطة شاملة للزي الموحد</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <div className="text-3xl mb-2">⚡</div>
                    <h3 className="font-bold mb-2">حلول سريعة</h3>
                    <p className="text-sm opacity-90">إجابات فورية لتحدياتك</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                    <div className="text-3xl mb-2">💡</div>
                    <h3 className="font-bold mb-2">ابتكار مستمر</h3>
                    <p className="text-sm opacity-90">أحدث التقنيات والاتجاهات</p>
                  </div>
                </div>
                
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
      </section>
      </div>
    </div>
  )
} 