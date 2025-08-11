"use client";

import { Button } from "@/components/ui/button";
import { useGoal } from "@/context/useGoal";
import { usePage } from "@/context/usePage";

const CategoryCard = () => {
  const { chartData } = useGoal();
  const { setSelectedPage } = usePage();

  return (
    <div className="border rounded-xl p-8  w-full justify-between flex flex-col">
      <div>
        <h3 className="text-primary font-bold text-2xl">Metas</h3>
      </div>
      <div className="flex flex-col gap-4 ">
        <ul>
          {Object.entries(chartData).map(([key, value]) => (
            <li
              key={key}
              className="flex justify-between items-center mb-4 gap-8"
            >
              <p className="font-bold">{value.label}</p>
              <p className="font-bold">{value.percentage}%</p>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="mt-4 w-full"
        variant="outline"
        onClick={() => setSelectedPage("Minhas Metas")}
      >
        Editar
      </Button>
    </div>
  );
};

export default CategoryCard;
