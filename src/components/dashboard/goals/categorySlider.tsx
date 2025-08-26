"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useGoal } from "@/context/useGoal";
import React from "react";

const CategorySlider = () => {
  const { chartData, setChartData } = useGoal();
  const [totalPercentage, setTotalPercentage] = React.useState(0);

  React.useEffect(() => {
    setTotalPercentage(
      chartData.reduce((acc, curr) => acc + curr.percentage, 0)
    );
  }, [chartData]);

  return (
    <div className="border p-4 rounded-xl gap-4 flex flex-col w-full">
      {chartData.map((value, index) => (
        <div key={index}>
          <div className="flex justify-between mb-2">
            <p className="font-bold">{value.label}</p>

            <p className="font-bold">{value.percentage}%</p>
          </div>

          <Slider
            defaultValue={[value.percentage]}
            max={100}
            step={1}
            onValueChange={(sliderValue) => {
              const newData = [...chartData];
              newData[index].percentage = sliderValue[0];
              setChartData(newData);
            }}
            sliderClassname={`data-[orientation=horizontal]:h-3`}
            className={`[&_[data-slot=slider-track]]:bg-secondary [&_[data-slot=slider-range]]:bg-${value.color} [&_[data-slot=slider-thumb]]:bg-${value.color} [&_[data-slot=slider-thumb]]:border-secondary`}
          />
        </div>
      ))}

      <div className="flex justify-center mt-4 gap-4">
        <Button variant="outline" className="cursor-pointer">
          Resetar
        </Button>

        {totalPercentage != 100 ? (
          <Button variant="ghost" disabled>
            Salvar
          </Button>
        ) : (
          <Button className="cursor-pointer">Salvar</Button>
        )}
      </div>
    </div>
  );
};

export default CategorySlider;
