import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Attire for Taxi and Ride-Hailing Drivers in Saudi Arabia: Building Trust',
  description: 'Discover the new professional dress code standards for taxi and ride-hailing service drivers in Saudi Arabia, designed to enhance customer trust and service quality.',
  openGraph: {
    title: 'Professional Attire for Taxi and Ride-Hailing Drivers in Saudi Arabia: Building Trust',
    description: 'New professional dress code standards for taxi and ride-hailing drivers in KSA',
    images: ['/public/images/transport_sector/drivers_attire.jpeg'],
  },
};

export default function TaxiDriverUniforms() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Professional Attire for Taxi and Ride-Hailing Drivers in Saudi Arabia: Building Trust
      </h1>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/images/transport_sector/drivers_attire.jpeg"
          alt="Professional taxi and ride-hailing driver uniforms in Saudi Arabia"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose max-w-none">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span>تاريخ النشر: مايو 25، 2025</span>
          <span className="mx-2">|</span>
          <span>وقت القراءة: 6 دقائق</span>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">مقدمة | Introduction</h2>
          <p className="mb-4">
            مع تزايد أهمية خدمات سيارات الأجرة وتطبيقات النقل في المملكة العربية السعودية، أصبح الزي المهني للسائقين عنصراً أساسياً في بناء الثقة وتعزيز جودة الخدمة. تقدم معايير 2025 رؤية جديدة للمظهر المهني الذي يجمع بين الأناقة والعملية.
          </p>
          <p className="mb-4">
            As taxi and ride-hailing services grow in importance across Saudi Arabia, professional driver attire has become essential in building trust and enhancing service quality. The 2025 standards present a new vision for professional appearance that combines elegance with practicality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">معايير الزي الأساسية | Core Dress Code Standards</h2>
          <p className="mb-4">
            تشمل المعايير الأساسية للزي المهني:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>قميص رسمي بألوان محددة حسب شركة النقل</li>
            <li>بنطلون قماش أنيق باللون الأسود أو الكحلي</li>
            <li>حذاء جلدي أنيق ومريح</li>
            <li>بطاقة تعريف واضحة وأنيقة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">عناصر الهوية المؤسسية | Corporate Identity Elements</h2>
          <p className="mb-4">
            تتضمن عناصر الهوية المؤسسية في الزي:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>شعار الشركة مطرز بأناقة</li>
            <li>ألوان تتناسق مع هوية العلامة التجارية</li>
            <li>تصميم موحد يعزز الاحترافية</li>
            <li>شارات وعلامات تعريفية مميزة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">ميزات الراحة والأداء | Comfort & Performance Features</h2>
          <p className="mb-4">
            روعي في تصميم الزي عوامل الراحة والأداء:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>أقمشة تسمح بالتهوية المثالية</li>
            <li>مرونة في الحركة أثناء القيادة</li>
            <li>مقاومة للتجعد خلال ساعات العمل</li>
            <li>سهولة العناية والتنظيف</li>
            <li>مناسبة لجميع الظروف المناخية</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">معايير النظافة والمظهر | Grooming Standards</h2>
          <p className="mb-4">
            تشمل معايير النظافة والمظهر العام:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>نظافة الزي وكيه بشكل يومي</li>
            <li>العناية بالمظهر الشخصي</li>
            <li>تجنب الإكسسوارات المبالغ فيها</li>
            <li>الحفاظ على رائحة محايدة ولطيفة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التكنولوجيا المدمجة | Integrated Technology</h2>
          <p className="mb-4">
            يتضمن الزي عناصر تقنية حديثة:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>جيوب مخصصة للهواتف الذكية</li>
            <li>حامل بطاقة تعريف إلكتروني</li>
            <li>عناصر عاكسة للضوء للسلامة الليلية</li>
            <li>أقمشة ذكية مقاومة للبقع</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الخاتمة | Conclusion</h2>
          <p className="mb-4">
            تمثل معايير الزي الجديدة لسائقي سيارات الأجرة وتطبيقات النقل خطوة مهمة نحو تعزيز الثقة والاحترافية في القطاع. من خلال الجمع بين المظهر الأنيق والراحة العملية، تساهم هذه المعايير في تحسين تجربة العملاء وتعزيز مكانة خدمات النقل في المملكة.
          </p>
        </section>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-xl font-semibold mb-4">عن الكاتب | About the Author</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="font-semibold">لجنة معايير النقل الخاص</p>
              <p className="text-sm text-gray-600">
                فريق متخصص في تطوير وتحديث معايير الزي المهني لقطاع النقل الخاص في المملكة العربية السعودية، مع التركيز على تعزيز الثقة والاحترافية في الخدمة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 