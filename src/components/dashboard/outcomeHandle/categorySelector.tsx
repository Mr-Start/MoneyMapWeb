"use client";

import {
  Car,
  DollarSign,
  GraduationCap,
  House,
  Target,
  Wine,
} from "lucide-react";
import { Category, useCategory } from "@/context/useCategoty";

const icons: Record<Category, React.ComponentType> = {
  FIXED: House,
  CONFORT: Car,
  GOALS: Target,
  JOY: Wine,
  INVESTMENT: DollarSign,
  STUDY: GraduationCap,
};

const CategorySelector = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="self-end">
      <div className="flex gap-4 items-center w-full">
        {Object.entries(icons).map(([category, Icon]) => (
          <div
            key={category}
            className={`rounded-full p-2 cursor-pointer ${
              selectedCategory === category ? "bg-primary text-white p-2" : ""
            }`}
            onClick={() => setSelectedCategory(category as Category)}
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
