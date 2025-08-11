"use client";

import { Slider } from "@/components/ui/slider";
import { useGoal } from "@/context/useGoal";

const CategorySlider = () => {
  const { chartData, setChartData } = useGoal();

  return (
    <div className="border p-4 rounded-xl gap-4 flex flex-col w-full">
      {Object.entries(chartData).map(([key, value]) => (
        <div key={key}>
          <Slider
            defaultValue={[value.percentage]}
            max={100}
            step={1}
            onValueChange={(value) => {
              const newData = [...chartData];
              newData[key as any].percentage = value[0];
              setChartData(newData);
            }}
            sliderClassname={`data-[orientation=horizontal]:h-3`}
            className={`[&_[data-slot=slider-track]]:bg-secondary [&_[data-slot=slider-range]]:bg-[${value.fill}] [&_[data-slot=slider-thumb]]:bg-[${value.fill}] [&_[data-slot=slider-thumb]]:border-[${value.fill}]`}
          />
        </div>
      ))}
    </div>
  );
};

export default CategorySlider;
