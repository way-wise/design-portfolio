import Image from "next/image";
import CategoryNav from "./category-nav";

interface HeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Header({ activeCategory, onCategoryChange }: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between sticky top-0 bg-gray-50 z-50 text-center px-4 md:px-[100px] py-4">
      <div className="flex items-end gap-2 md:gap-5 mb-4 md:mb-0">
        <Image src="/wwt_logo.png" alt="Logo" width={200} height={160} className="w-[180px] md:w-[250px]" />
        <p className="text-xs md:text-sm -mb-0.5 font-bold text-gray-900">
          A California Innovation Company
        </p>
      </div>
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl md:text-3xl text-orange-600 font-bold">
          Our Dynamic Portfolio
        </h2>
        <a
          href="mailto:support@waywisetech.com"
          className="text-orange-600 font-bold text-xs md:text-sm mt-1 md:mt-2 block"
        >
          support@waywisetech.com
        </a>
      </div>
      <div className="w-full md:max-w-max py-2 md:py-5">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </header>
  );
}
