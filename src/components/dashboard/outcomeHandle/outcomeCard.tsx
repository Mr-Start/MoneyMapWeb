"use client";

import { useCategory, categoryTranslations } from "@/context/useCategoty";
import OutcomeTable from "./outcomeTable";
import { AddOutcome } from "./addOutcome";

const OutcomeCard = () => {
  const { selectedCategory } = useCategory();

  return (
    <div className="border p-4 rounded-xl gap-8 flex flex-col h-full w-full">
      <h1 className="font-bold text-[#daa95a]">
        {categoryTranslations[selectedCategory]}
      </h1>
      <OutcomeTable />
      <div>
        <h1 className="text-primary font-bold text-xl mb-4">Adicionar Custo</h1>
        <AddOutcome />
      </div>
      <div className="flex gap-4">
        <div>
          <h1 className="text-green-500 font-bold">R$101010</h1>
          <p className="text-sm font-bold">Total gastos</p>
        </div>
        <div>
          <h1 className="text-red-500 font-bold">R$5050</h1>
          <p className="text-sm font-bold">Total a gastar</p>
        </div>
        <div>
          <h1>50%</h1>
          <p className="text-sm font-bold">Utilizado</p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeCard;
