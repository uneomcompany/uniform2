import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uniform Requirements for Train & Rail Operators in Saudi Arabia (2025 Standards)',
  description: 'Comprehensive guide to the new 2025 uniform standards for train and rail operators in Saudi Arabia, focusing on safety, professionalism, and modern technology integration.',
  openGraph: {
    title: 'Uniform Requirements for Train & Rail Operators in Saudi Arabia (2025 Standards)',
    description: 'New uniform standards for train and rail operators in Saudi Arabia - 2025 guidelines',
    images: ['/public/images/transport_sector/transport_company_uniforms.jpeg'],
  },
};

export default function TrainRailOperatorUniforms() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Uniform Requirements for Train & Rail Operators in Saudi Arabia (2025 Standards)
      </h1>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/images/transport_sector/transport_company_uniforms.jpeg"
          alt="Professional train and rail operator uniforms in Saudi Arabia"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose max-w-none">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span>تاريخ النشر: مايو 30، 2025</span>
          <span className="mx-2">|</span>
          <span>وقت القراءة: 8 دقائق</span>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">مقدمة | Introduction</h2>
          <p className="mb-4">
            مع التوسع الكبير في شبكة السكك الحديدية في المملكة العربية السعودية، تم تطوير معايير جديدة للزي الموحد لمشغلي القطارات والسكك الحديدية لعام 2025. تجمع هذه المعايير بين أعلى مستويات السلامة والمهنية مع التكنولوجيا المتقدمة.
          </p>
          <p className="mb-4">
            With the major expansion of Saudi Arabia's railway network, new uniform standards have been developed for train and rail operators for 2025. These standards combine the highest levels of safety and professionalism with advanced technology.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">معايير السلامة المتقدمة | Advanced Safety Standards</h2>
          <p className="mb-4">
            تتضمن معايير السلامة الجديدة:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>مواد مقاومة للحريق والحرارة العالية</li>
            <li>عناصر عاكسة للضوء بتقنية متطورة</li>
            <li>أنظمة تحذير مدمجة في الزي</li>
            <li>مواد مقاومة للكهرباء الساكنة</li>
            <li>تصميم يسهل الحركة في حالات الطوارئ</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التمييز الوظيفي | Role Distinction</h2>
          <p className="mb-4">
            يميز الزي الموحد بين مختلف الأدوار في قطاع السكك الحديدية:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>سائقي القطارات: زي خاص بميزات تقنية متقدمة</li>
            <li>مشرفي المحطات: زي يعكس السلطة والمسؤولية</li>
            <li>طاقم الخدمة: زي يجمع بين الأناقة والعملية</li>
            <li>فريق الصيانة: زي مصمم للعمل الميداني</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التكنولوجيا المدمجة | Integrated Technology</h2>
          <p className="mb-4">
            يتميز الزي بأحدث التقنيات:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>أجهزة استشعار لمراقبة الحالة الصحية</li>
            <li>نظام اتصال لاسلكي مدمج</li>
            <li>شارات ذكية للوصول والتحكم</li>
            <li>أنظمة تتبع للسلامة والأمان</li>
            <li>تقنية التحكم في درجة الحرارة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الراحة والأداء | Comfort & Performance</h2>
          <p className="mb-4">
            تم تصميم الزي لضمان الراحة خلال نوبات العمل الطويلة:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>أقمشة متطورة تسمح بالتهوية</li>
            <li>تصميم مريح يناسب ساعات العمل الطويلة</li>
            <li>خفة الوزن مع المتانة العالية</li>
            <li>مقاومة للتجعد والاتساخ</li>
            <li>سهولة الحركة والمرونة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الهوية المؤسسية | Corporate Identity</h2>
          <p className="mb-4">
            يعكس الزي الهوية المؤسسية للسكك الحديدية السعودية:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>ألوان وتصاميم تعكس الهوية الوطنية</li>
            <li>شعارات وعلامات مميزة</li>
            <li>جودة تعكس مكانة القطاع</li>
            <li>تصميم موحد يعزز الثقة</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الصيانة والاستدامة | Maintenance & Sustainability</h2>
          <p className="mb-4">
            روعي في التصميم الجوانب البيئية والعملية:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>مواد صديقة للبيئة</li>
            <li>سهولة العناية والتنظيف</li>
            <li>متانة تضمن عمراً أطول</li>
            <li>قابلية إعادة التدوير</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الخاتمة | Conclusion</h2>
          <p className="mb-4">
            تمثل معايير الزي الموحد لعام 2025 لمشغلي القطارات والسكك الحديدية نقلة نوعية في القطاع. تجمع هذه المعايير بين أحدث التقنيات ومتطلبات السلامة والراحة، مما يساهم في تعزيز كفاءة العمل وتحسين صورة قطاع النقل بالسكك الحديدية في المملكة.
          </p>
        </section>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-xl font-semibold mb-4">عن الكاتب | About the Author</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="font-semibold">إدارة معايير السكك الحديدية</p>
              <p className="text-sm text-gray-600">
                فريق متخصص في تطوير وتحديث معايير السلامة والزي المهني في قطاع السكك الحديدية بالمملكة العربية السعودية، مع التركيز على دمج أحدث التقنيات ومعايير السلامة العالمية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 