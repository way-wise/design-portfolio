"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PortfolioItem } from "@/lib/portfolio-data";

interface PortfolioCardProps {
  item: PortfolioItem;
  isHighlighted: boolean;
}

export default function PortfolioCard({
  item,
  isHighlighted,
}: PortfolioCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "apps-design":
        return "bg-emerald-500";
      case "web-design":
        return "bg-purple-500";
      case "branding":
        return "bg-rose-500";
      case "email-template":
        return "bg-amber-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "apps-design":
        return "from-emerald-400 to-teal-600";
      case "web-design":
        return "from-purple-400 to-indigo-600";
      case "branding":
        return "from-rose-400 to-pink-600";
      case "email-template":
        return "from-amber-400 to-orange-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  return (
    <div
      className={cn(
        "group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white shadow-md p-0",
        {
          [`outline outline-2 outline-offset-2 outline-orange-500`]: isHighlighted,
        }
      )}
    >
      <div
        className={cn(
          "relative z-10 h-full overflow-hidden rounded-xl",
          {
            "outline outline-2 outline-offset-2 bg-orange-500 text-white outline-orange-500": isHighlighted
          }
        )}
      >
        <div className="relative group-hover:scale-105 transition-transform duration-500">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={600}
            height={400}
            className="w-full h-48 md:h-64 lg:h-80 object-cover"
          />
          <span
            className={cn(
              "absolute top-3 left-3 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium",
              getCategoryColor(item.category)
            )}
          >
            {item.highlightKeyword}
          </span>
        </div>

        <div className="p-4 md:p-6">
          <p className="block">
            <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>{" "}
          </p>
          <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base">{item.description}</p>
          <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
            {item.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {item.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                +{item.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* <div className="px-6 pb-6 flex justify-between">
          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} className="mr-1" />
              <span>Live Demo</span>
            </a>
          )}

          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} className="mr-1" />
              <span>Source Code</span>
            </a>
          )}
        </div> */}
       
      </div>
    </div>
  );
}
