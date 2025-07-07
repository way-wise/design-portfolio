"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import CategoryNav from "@/components/category-nav";
import PortfolioCard from "@/components/portfolio-card";
import { portfolioItems } from "@/lib/portfolio-data";
import Image from "next/image";
import { sectionInfo } from "@/lib/portfolio-data";
import Header from "@/components/header";

type SectionKey = keyof typeof sectionInfo;

export default function Home() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("apps-design");
  const [highlightedIds, setHighlightedIds] = useState<string[]>([]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({
    "apps-design": null,
    "web-design": null,
    branding: null,
    "email-template": null,
  });

  // Handle URL parameters for highlighting specific cards
  useEffect(() => {
    const idParam = searchParams.get("id");
    if (idParam) {
      // Support multiple IDs separated by commas
      const ids = idParam.split(",");
      setHighlightedIds(ids);

      // If there's at least one ID, set the active category to the first highlighted item's category
      if (ids.length > 0) {
        const firstItem = portfolioItems.find((item) => item.id === ids[0]);
        if (firstItem) {
          setActiveCategory(firstItem.category);

          // Use a ref to track if we've already scrolled to avoid infinite loops
          const timer = setTimeout(() => {
            if (sectionRefs.current[firstItem.category]) {
              sectionRefs.current[firstItem.category]?.scrollIntoView({
                behavior: "smooth",
              });
            }
          }, 500);

          return () => clearTimeout(timer);
        }
      }
    }
  }, [searchParams]); // Only depend on searchParams

  const scrollToCategory = (category: string) => {
    // Don't update state here, just scroll
    if (sectionRefs.current[category]) {
      sectionRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Use setTimeout to ensure the state update completes before scrolling
    setTimeout(() => {
      scrollToCategory(category);
    }, 0);
  };

  // Group portfolio items by category
  const itemsByCategory = portfolioItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof portfolioItems>);

  // Get unique categories
  const categories = Object.keys(itemsByCategory);

  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-purple-50">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-[600px]">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  We Design products <br /> That Drive Results
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                  Creating user-first experiences that boost engagement, retention, and growth.
              </p>
              <a
                href="#section-wordpress"
                className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              >
                View Our Work
              </a>
            </div>
            <div className="flex items-center justify-center p-4">
              <Image
                src={`/hero-right.jpg`}
                alt={`hero-right`}
                width={600}
                height={600}
                className="transition-opacity rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Sections - One for each category */}
      {categories.map((category) => (
        <section
          key={category}
          ref={(el) => {
            sectionRefs.current[category] = el as HTMLDivElement | null;
          }}
          className="py-16 md:py-24 lg:py-32 px-4 bg-white border-b-4 border-gray-200 last:border-0"
          id={`section-${category}`}
        >
          <div className="px-4 md:px-8 lg:px-16">
            <div className="flex flex-col items-center gap-2 md:gap-4 pb-12 md:pb-16 lg:pb-20">
              <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-900 font-semibold text-center capitalize">
                {sectionInfo[category as SectionKey]?.title ||
                  `${category} Projects`}
              </h2>
              <p className="text-center text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl">
                {sectionInfo[category as SectionKey]?.description ||
                  "Explore my work in this category."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {itemsByCategory[category].map((item, index) => (
                <PortfolioCard
                  key={item.id + index}
                  item={item}
                  isHighlighted={highlightedIds.includes(item.id)}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Our Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Showcasing my development journey
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="hover:text-gray-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-gray-300 transition-colors"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
