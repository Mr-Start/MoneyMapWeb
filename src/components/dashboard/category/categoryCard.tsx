"use client";

import { Button } from "@/components/ui/button";
import { usePage } from "@/context/usePage";

const categories = [
  ["Custos Fixos", "30%"],
  ["Conforto", "25%"],
  ["Metas", "20%"],
  ["Prazeres", "15%"],
  ["Liberdade Financeira", "10%"],
  ["Conhecimento", "5%"],
];

const CategoryCard = () => {
  const { setSelectedPage } = usePage();

  return (
    <div className="border rounded-xl p-8 ">
      <h3 className="text-primary font-bold text-2xl">Metas</h3>
      <div className="flex flex-col gap-4 mt-4 h-full">
        <ul>
          {categories.map((category) => (
            <li
              key={category[0]}
              className="flex justify-between items-center mb-4 gap-8"
            >
              <p className="font-bold">{category[0]}</p>
              <p className="font-bold">{category[1]}</p>
            </li>
          ))}
        </ul>
        <Button
          className="mt-4 w-full"
          variant="outline"
          onClick={() => setSelectedPage("Minhas Metas")}
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default CategoryCard;
