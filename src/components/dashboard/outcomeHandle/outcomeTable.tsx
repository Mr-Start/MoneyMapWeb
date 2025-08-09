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

const OutcomeTable = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex">
        <h1 className="w-full font-bold text-[#849992]">Custo</h1>
        <h1 className="w-full font-bold text-[#849992]">Valor Gasto</h1>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {fakeData.map((outcome) => (
          <div
            key={outcome.id}
            className="flex justify-between items-center w-full border-b border-[#849992] py-4 border-dotted font-bold"
          >
            <h1 className="w-full">{outcome.name}</h1>
            <h1 className="w-full">{`R$${outcome.amount.toFixed(2)}`}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutcomeTable;
