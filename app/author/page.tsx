import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'كتّاب المدونة | خبراء الزي الموحد في السعودية',
  description: 'تعرف على فريق خبراء الزي الموحد الرائدين في المملكة العربية السعودية. خبرة واسعة في جميع القطاعات والصناعات.',
  keywords: 'كتّاب المدونة, خبراء الزي الموحد, استشاريين الزي, السعودية, النقل, الطيران, البنوك',
  robots: 'index, follow',
  openGraph: {
    title: 'كتّاب المدونة | خبراء الزي الموحد في السعودية',
    description: 'تعرف على فريق خبراء الزي الموحد الرائدين في المملكة العربية السعودية',
    type: 'website',
  }
}

// قائمة المؤلفين
const authors = [
  {
    name: "سامي الهلالي",
    arabicName: "سامي عبدالله الهلالي",
    slug: "سامي_الهلالي",
    title: "خبير الزي الموحد للنقل الرائد في السعودية",
    role: "استشاري كبير للزي الموحد ومتخصص الصناعة",
    specialty: "قطاع النقل",
    experience: "15+ سنة",
    articlesCount: 8,
    totalViews: "120,000+",
    image: "/images/author/سامي_الهلالي.jpg",
    bio: "خبير مشهور في تصميم وتنفيذ الزي الموحد لقطاع النقل عبر المملكة العربية السعودية ومنطقة الخليج.",
    achievements: [
      "تصميم أنظمة زي موحد لـ 200+ شركة نقل",
      "تقليل الحوادث المرتبطة بالحرارة بنسبة 40%",
      "جائزة التميز في الابتكار لصناعة النقل 2023"
    ],
    featuredArticle: "دليل المواد المتقدمة للزي الموحد للنقل في السعودية"
  },
  {
    name: "عبدالله الخالدي",
    arabicName: "عبدالله محمد الخالدي",
    slug: "عبدالله_الخالدي",
    title: "خبير الزي الموحد للطيران والضيافة",
    role: "استشاري أول للزي المؤسسي والضيافة",
    specialty: "قطاع الطيران والضيافة",
    experience: "12+ سنة",
    articlesCount: 6,
    totalViews: "85,000+",
    image: "/images/author/عبدالله_الخالدي.jpg",
    bio: "متخصص في تصميم الزي الموحد الفاخر لقطاعات الطيران والضيافة والخدمات المصرفية المتميزة.",
    achievements: [
      "تصميم زي موحد لـ 50+ شركة طيران وفندق",
      "رائد في دمج التقاليد السعودية مع التصميم العصري",
      "جائزة أفضل تصميم زي موحد للضيافة 2022"
    ],
    featuredArticle: "تصميم الزي الموحد للطيران: دمج التراث مع الحداثة"
  },
  {
    name: "محمد الصالح",
    arabicName: "محمد علي الصالح",
    slug: "محمد_الصالح",
    title: "خبير المشتريات والموردين",
    role: "استشاري سلسلة التوريد والمشتريات",
    specialty: "إدارة الموردين والمشتريات",
    experience: "18+ سنة",
    articlesCount: 5,
    totalViews: "75,000+",
    image: "/images/author/محمد_الصالح.jpg",
    bio: "خبير في إدارة سلاسل التوريد وعمليات الشراء للزي الموحد مع التركيز على الجودة والكفاءة المالية.",
    achievements: [
      "توفير 25% من تكاليف المشتريات للعملاء",
      "بناء شبكة موردين متميزة في المملكة",
      "جائزة التميز في إدارة سلسلة التوريد 2023"
    ],
    featuredArticle: "دليل اختيار الموردين الموثوقين للزي الموحد في السعودية"
  }
]

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">فريق الخبراء</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              تعرف على نخبة من أفضل خبراء الزي الموحد في المملكة العربية السعودية، الذين يقدمون المحتوى الأكثر قيمة ودقة في هذا المجال
            </p>
          </div>
        </div>
      </div>

      {/* Authors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Author Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                <Image
                  src={author.image}
                  alt={author.arabicName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {author.experience}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {author.articlesCount} مقال
                    </span>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{author.arabicName}</h2>
                  <p className="text-blue-600 font-semibold text-sm">{author.title}</p>
                  <p className="text-gray-600 text-sm">{author.role}</p>
                </div>

                {/* Specialty Badge */}
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {author.specialty}
                  </span>
                </div>

                {/* Bio */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{author.bio}</p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">أبرز الإنجازات:</h3>
                  <ul className="space-y-1">
                    {author.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start">
                        <span className="text-green-500 mr-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{author.totalViews}</div>
                    <div className="text-xs text-gray-600">مشاهدة إجمالية</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900">{author.articlesCount}</div>
                    <div className="text-xs text-gray-600">مقال منشور</div>
                  </div>
                </div>

                {/* Featured Article */}
                <div className="mb-6 p-3 bg-yellow-50 rounded-lg border-r-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 text-sm mb-1">المقال المميز:</h4>
                  <p className="text-yellow-700 text-xs">{author.featuredArticle}</p>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/author/${author.slug}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  عرض الملف الشخصي
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">هل تحتاج استشارة متخصصة؟</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            تواصل مع أحد خبرائنا للحصول على استشارة مخصصة لاحتياجات الزي الموحد في مؤسستك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-yellow-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
            >
              احجز استشارة
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 