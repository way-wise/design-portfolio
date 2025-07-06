"use client"

import { cn } from "@/lib/utils"

const categories = [
  { id: "apps-design", label: "Apps Design" },
  { id: "web-design", label: "Web Design" },
  { id: "branding", label: "Branding" },
  { id: "email-template", label: "Email Template" },
]

interface CategoryNavProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  isMobile?: boolean
}

export default function CategoryNav({ activeCategory, onCategoryChange, isMobile = false }: CategoryNavProps) {
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "apps-design":
        return "from-emerald-400 to-teal-600"
      case "web-design":
        return "from-purple-400 to-indigo-600"
      case "branding":
        return "from-rose-400 to-pink-600"
      case "email-template":
        return "from-amber-400 to-orange-600"
      default:
        return "from-gray-700 to-gray-900"
    }
  }

  return (
    <div className={cn(
      "flex gap-2 md:gap-3",
      isMobile ? "flex-col" : "flex-wrap justify-center"
    )}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-3 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all text-sm md:text-base whitespace-nowrap w-full md:w-auto text-center",
            activeCategory === category.id
              ? "text-white shadow-lg bg-gradient-to-r"
              : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200",
            activeCategory === category.id && getCategoryGradient(category.id),
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
