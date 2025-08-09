"use client";

import { Slider } from "@/components/ui/slider";

const chartData = [
  { category: "fixed", money: 275, fill: "var(--chart-1)" },
  { category: "confort", money: 200, fill: "var(--chart-2)" },
  { category: "goals", money: 287, fill: "var(--chart-3)" },
  { category: "joy", money: 173, fill: "var(--chart-4)" },
  { category: "investment", money: 190, fill: "var(--chart-5)" },
  { category: "study", money: 190, fill: "var(--chart-6)" },
];

const CategorySlider = () => {
  return (
    <div className="border p-4 rounded-xl gap-4 flex flex-col w-full">
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
};

export default CategorySlider;
