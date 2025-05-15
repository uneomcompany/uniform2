import Image from 'next/image'
import Link from 'next/link'

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  image?: string;
  imageAlt?: string;
  className?: string;
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
  image,
  imageAlt = "Header image",
  className = "",
}: PageHeaderProps) {
  return (
    <div className={`mb-10 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {breadcrumb.href ? (
                  <Link href={breadcrumb.href} className="text-gray-500 hover:text-primary">
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{breadcrumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {image && (
        <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden">
          <Image 
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
              {description && <p className="text-lg md:text-xl max-w-3xl mx-auto">{description}</p>}
            </div>
          </div>
        </div>
      )}

      {!image && (
        <div className="bg-primary text-white rounded-xl p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          {description && <p className="text-lg max-w-3xl opacity-90">{description}</p>}
        </div>
      )}
    </div>
  )
} 