import Link from 'next/link'

interface RelatedArticle {
  title: string;
  url: string;
  category: string;
  categoryColor: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <div key={index} className="group">
          <Link href={article.url} className="block">
            <div className="flex items-start">
              <div className={`${article.categoryColor} h-2 w-2 rounded-full mt-1.5 flex-shrink-0`}></div>
              <div className="ml-3">
                <span className="text-xs font-semibold text-gray-500 block mb-1">{article.category}</span>
                <h4 className="text-sm font-medium group-hover:text-blue-600 transition duration-150">
                  {article.title}
                </h4>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
} 