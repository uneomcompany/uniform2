import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On the Move with Style: 2025 Uniform Trends for Saudi Arabia\'s Transport Sector',
  description: 'Discover the latest uniform trends and standards for Saudi Arabia\'s transport sector in 2025. Learn about innovative designs combining tradition, comfort, and professionalism.',
  openGraph: {
    title: 'On the Move with Style: 2025 Uniform Trends for Saudi Arabia\'s Transport Sector',
    description: 'Discover the latest uniform trends and standards for Saudi Arabia\'s transport sector in 2025',
    images: ['/public/images/transport_sector/transport_uniforms.png'],
  },
};

export default function TransportUniformTrends() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        On the Move with Style: 2025 Uniform Trends for Saudi Arabia's Transport Sector
      </h1>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/images/transport_sector/transport_uniforms.png"
          alt="Modern transport uniforms showcasing 2025 trends in Saudi Arabia"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose max-w-none">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span>تاريخ النشر: مايو 15، 2025</span>
          <span className="mx-2">|</span>
          <span>وقت القراءة: 7 دقائق</span>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">مقدمة | Introduction</h2>
          <p className="mb-4">
            مع تسارع وتيرة التطور في قطاع النقل السعودي، يشهد عام 2025 تحولاً جذرياً في تصميم الزي الموحد للعاملين في هذا القطاع الحيوي. يأتي هذا التطور تماشياً مع رؤية المملكة 2030 وتطلعاتها نحو تقديم خدمات نقل عالمية المستوى.
          </p>
          <p className="mb-4">
            As Saudi Arabia's transport sector accelerates its development, 2025 marks a revolutionary shift in uniform design for workers in this vital sector. This evolution aligns with Vision 2030 and its aspirations to deliver world-class transportation services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التصميم المبتكر والهوية السعودية | Innovative Design & Saudi Identity</h2>
          <p className="mb-4">
            تجمع التصاميم الجديدة بين الهوية السعودية الأصيلة والتقنيات المتطورة في صناعة الملابس. تتميز الأزياء الموحدة لعام 2025 بما يلي:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>أقمشة ذكية مقاومة للحرارة والرطوبة</li>
            <li>تصاميم عصرية تحترم الثقافة المحلية</li>
            <li>عناصر عاكسة للضوء لتعزيز السلامة</li>
            <li>شارات وعلامات رقمية ذكية</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">معايير الراحة والأداء | Comfort & Performance Standards</h2>
          <p className="mb-4">
            تم تطوير المعايير الجديدة مع التركيز على راحة العاملين خلال نوبات العمل الطويلة:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>مواد خفيفة الوزن تسمح بتهوية مثالية</li>
            <li>تصميم مريح يسهل الحركة</li>
            <li>جيوب وحلول تخزين عملية</li>
            <li>قابلية التكيف مع مختلف الظروف المناخية</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التكنولوجيا المدمجة | Integrated Technology</h2>
          <p className="mb-4">
            تتميز أزياء 2025 بدمج التقنيات الحديثة:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>أجهزة تتبع GPS مدمجة للسلامة</li>
            <li>أنظمة تبريد وتدفئة ذكية</li>
            <li>مؤشرات حالة صحية مدمجة</li>
            <li>اتصال لاسلكي مع أنظمة المركبات</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الاستدامة والصيانة | Sustainability & Maintenance</h2>
          <p className="mb-4">
            روعي في التصاميم الجديدة الجانب البيئي:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>مواد صديقة للبيئة وقابلة لإعادة التدوير</li>
            <li>تقنيات تنظيف ذاتي للأقمشة</li>
            <li>مقاومة عالية للبقع والاتساخ</li>
            <li>عمر افتراضي أطول للزي</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الخاتمة | Conclusion</h2>
          <p className="mb-4">
            تمثل اتجاهات الزي الموحد لعام 2025 نقلة نوعية في قطاع النقل السعودي، حيث تجمع بين الأصالة والابتكار والتكنولوجيا. هذه التطورات لا تعكس فقط التزام المملكة بالتميز في خدمات النقل، بل تضع معايير جديدة للزي المهني في المنطقة.
          </p>
        </section>

        <div className="border-t pt-8 mt-8">
          <h3 className="text-xl font-semibold mb-4">عن الكاتب | About the Author</h3>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="font-semibold">فريق تطوير المعايير المهنية</p>
              <p className="text-sm text-gray-600">
                متخصصون في تطوير معايير الزي المهني وتصميم الأزياء الموحدة للقطاعات الحكومية والخاصة في المملكة العربية السعودية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
} 