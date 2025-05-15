"use client"

import { useState, useEffect } from 'react'

interface TableOfContentsItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    // Observe all section elements with IDs
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Clean up observer
      items.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [items]);

  return (
    <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
      <h3 className="text-lg font-bold mb-4">Table of Contents</h3>
      <nav className="toc">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 text-sm border-l-2 pl-3 transition-colors ${
                  activeId === item.id
                    ? "text-blue-600 border-blue-600 font-medium"
                    : "text-gray-600 border-gray-200 hover:text-blue-600 hover:border-blue-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth"
                  });
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
} 