"use client";

import { OutcomeRes } from "@/types/outcomeType";

const fakeData: OutcomeRes[] = [
  {
    id: "1",
    userId: "user1",
    category: "fixed",
    amount: 500,
    name: "Aluguel",
    date: "2023-10-01T00:00:00Z",
    createdAt: "2023-10-01T00:00:00Z",
    updatedAt: "2023-10-01T00:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    category: "confort",
    amount: 200,
    name: "Internet",
    date: "2023-10-02T00:00:00Z",
    createdAt: "2023-10-02T00:00:00Z",
    updatedAt: "2023-10-02T00:00:00Z",
  },
  {
    id: "3",
    userId: "user1",
    category: "goals",
    amount: 300,
    name: "Viagem",
    date: "2023-10-03T00:00:00Z",
    createdAt: "2023-10-03T00:00:00Z",
    updatedAt: "2023-10-03T00:00:00Z",
  },
];

const OutcomeResumed = () => {
  return (
    <div className="border p-4 rounded-xl gap-4 flex flex-col w-full">
      <div className="flex flex-col w-full">
        <div className="w-full flex">
          <h1 className="w-full font-bold text-[#849992]">Custo</h1>
          <h1 className="w-full font-bold text-[#849992]">Valor Gasto</h1>
        </div>
        <div>
          {fakeData.map((outcome) => (
            <div
              key={outcome.id}
              className="flex justify-between items-center w-full border-b border-[#849992] py-2 border-dotted"
            >
              <h1 className="w-full">{outcome.name}</h1>
              <h1 className="w-full">{`R$${outcome.amount.toFixed(2)}`}</h1>
            </div>
          ))}
        </div>
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

export default OutcomeResumed;
