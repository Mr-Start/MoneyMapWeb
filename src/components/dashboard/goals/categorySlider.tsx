"use client";

import { Slider } from "@/components/ui/slider";
import { useGoal } from "@/context/useGoal";

const CategorySlider = () => {
  const { chartData, setChartData } = useGoal();
  console.log(chartData);

  return (
    <div className="border p-4 rounded-xl gap-4 flex flex-col w-full">
      {/* <Slider defaultValue={[33]} max={100} step={1} /> */}
      {Object.entries(chartData).map(([key, value]) => (
        <Slider
          key={key}
          defaultValue={[value.percentage]}
          max={100}
          step={1}
          onValueChange={(value) => {
            const newData = [...chartData];
            newData[key].percentage = value[0];
            setChartData(newData);
          }}
        />
      ))}
    </div>
  );
};

export default CategorySlider;
