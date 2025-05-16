'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function CanonicalLinkTags() {
  const pathname = usePathname();
  
  // استخراج المسار الحالي وإنشاء رابط canonical كامل
  const canonicalUrl = `https://abjdeat.com${pathname}`;
  
  // بالنسبة للصفحة الرئيسية، نستخدم الـ URL بدون شرطة في النهاية
  const finalUrl = pathname === '/' ? 'https://abjdeat.com' : canonicalUrl;
  
  // إنشاء سكريبت يضيف علامة canonical بشكل مباشر في الـ head
  return (
    <Script id="canonical-tag" strategy="afterInteractive">
      {`
        (function() {
          const link = document.createElement('link');
          link.rel = 'canonical';
          link.href = '${finalUrl}';
          document.head.appendChild(link);
        })();
      `}
    </Script>
  );
} 