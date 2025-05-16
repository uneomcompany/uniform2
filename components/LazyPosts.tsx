'use client';

import { useState, useEffect } from 'react';
import BlogPostCard from '../app/components/BlogPostCard';

interface Post {
  title: string;
  imageSrc: string;
  url: string;
  category: string;
  categoryColor: string;
}

interface LazyPostsProps {
  posts: Post[];
  initialCount?: number;
  increment?: number;
}

export default function LazyPosts({ 
  posts, 
  initialCount = 9, 
  increment = 6 
}: LazyPostsProps) {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [postsToShow, setPostsToShow] = useState(initialCount);

  useEffect(() => {
    // Set initial visible posts
    setVisiblePosts(posts.slice(0, postsToShow));
  }, [posts, postsToShow]);

  const loadMorePosts = () => {
    const newPostsToShow = Math.min(postsToShow + increment, posts.length);
    setPostsToShow(newPostsToShow);
    setVisiblePosts(posts.slice(0, newPostsToShow));
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {visiblePosts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            imageSrc={post.imageSrc}
            url={post.url}
            category={post.category}
            categoryColor={post.categoryColor}
          />
        ))}
      </div>
      
      {postsToShow < posts.length && (
        <div className="flex justify-center my-8">
          <button
            onClick={loadMorePosts}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
} 