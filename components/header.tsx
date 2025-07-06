"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import CategoryNav from "./category-nav";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Header({ activeCategory, onCategoryChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (category: string) => {
    onCategoryChange(category);
    setIsMenuOpen(false); // Close menu when category is selected
  };

  return (
    <header className="sticky top-0 bg-gray-50 z-50 border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 md:px-8 lg:px-16">
        {/* Mobile Layout */}
        <div className="xl:hidden">
          {/* Top Row - Logo, Company Info, and Hamburger */}
          <div className="flex flex-col divide-y md:divide-y-0 gap-2 md:gap-0 md:flex-row md:items-center justify-between mb-4">
            <div className="flex items-end gap-2">
              <Image 
                src="/wwt_logo.png" 
                alt="Logo" 
                width={120} 
                height={96} 
                className="w-[100px] h-auto" 
              />
              <div className="flex flex-col">
                <p className="text-[10px] md:text-xs font-bold text-gray-900 leading-tight">
                  A California Innovation Company
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div className="text-right">
                <h2 className="text-sm md:text-lg mb-0 text-orange-600 font-bold">
                  Our Dynamic Portfolio
                </h2>
                <a
                  href="mailto:support@waywisetech.com"
                  className="text-orange-600 font-bold text-[10px] md:text-xs block xl:mt-1"
                >
                  support@waywisetech.com
                </a>
              </div>
              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-200 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation Dropdown */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pb-4 border-t border-gray-200 pt-4">
              <CategoryNav
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryClick}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:flex items-center justify-between">
          {/* Logo and Company Info */}
          <div className="flex items-end gap-4">
            <Image 
              src="/wwt_logo.png" 
              alt="Logo" 
              width={200} 
              height={160} 
              className="w-[180px] lg:w-[220px] h-auto" 
            />
            <p className="text-sm lg:text-base font-bold text-gray-900 mb-1">
              A California Innovation Company
            </p>
          </div>
          
          {/* Title and Email */}
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl text-orange-600 font-bold">
              Our Dynamic Portfolio
            </h2>
            <a
              href="mailto:support@waywisetech.com"
              className="text-orange-600 font-bold text-sm lg:text-base mt-0 block"
            >
              support@waywisetech.com
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="min-w-[400px]">
            <CategoryNav
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
