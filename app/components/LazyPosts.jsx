'use client'

import { useState, useEffect } from 'react'
import BlogPostCard from './BlogPostCard'

export default function LazyPosts({ posts }) {
  const [displayedItems, setDisplayedItems] = useState(12); // 4 rows of 3 items
  const [loading, setLoading] = useState(false);

  // Function to load more items
  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayedItems(prev => Math.min(prev + 12, posts.length));
      setLoading(false);
    }, 300); // Small delay for visual feedback
  };

  // Handle scroll event to load more items
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled near the bottom
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        if (!loading && displayedItems < posts.length) {
          loadMoreItems();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedItems, loading, posts.length]);

  return (
    <>
      {posts.slice(0, displayedItems).map((post, index) => (
        <BlogPostCard
          key={index}
          title={post.title}
          imageSrc={post.imageSrc}
          url={post.url}
          category={post.category}
          categoryColor={post.categoryColor}
        />
      ))}
      {displayedItems < posts.length && (
        <div className="col-span-full text-center mt-8">
          <button
            onClick={loadMoreItems}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More Articles'}
          </button>
        </div>
      )}
    </>
  );
} 