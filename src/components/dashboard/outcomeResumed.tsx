"use client";

import { OutcomeRes } from "@/types/outcomeType";
import {
  allCategories,
  Category,
  categoryTranslations,
} from "@/context/useCategoty";
import { useIncome } from "@/context/useIncome";
import { useGoal } from "@/context/useGoal";
import { useOutcome } from "@/context/useOutcome";

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
    category: "fixed",
    amount: 300,
    name: "Viagem",
    date: "2023-10-03T00:00:00Z",
    createdAt: "2023-10-03T00:00:00Z",
    updatedAt: "2023-10-03T00:00:00Z",
  },
];

const OutcomeResumed = () => {
  const { income } = useIncome();
  const { outcome } = useOutcome();
  const { chartData } = useGoal();

  return (
    <div className="border p-8 rounded-xl gap-4 flex flex-col w-full justify-between h-full">
      <div>
        <h1 className="text-2xl font-bold text-primary">Resumo </h1>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="w-full flex">
          <h1 className="w-full font-bold text-[#849992]">Budget</h1>
          <h1 className="w-full font-bold text-[#849992] text-end">
            Valor Gasto
          </h1>
          <h1 className="w-full font-bold text-[#849992] text-end">
            Devo gastar
          </h1>
          <h1 className="w-full font-bold text-[#849992] text-end">
            Utilizado
          </h1>
          <h1 className="w-full font-bold text-[#849992] text-end">Total</h1>
        </div>
        <div>
          {allCategories.map((category: Category) => {
            const totalBudget = fakeData
              .filter(
                (item) => item.category.toLowerCase() === category.toLowerCase()
              )
              .reduce((acc, curr) => acc + curr.amount, 0);

            const utilizedBudget =
              (totalBudget /
                ((income *
                  (chartData.find(
                    (c) => c.category.toLowerCase() === category.toLowerCase()
                  )?.percentage || 0)) /
                  100)) *
              100;

            const mustSpend =
              (income *
                (chartData.find(
                  (c) => c.category.toLowerCase() === category.toLowerCase()
                )?.percentage || 0)) /
              100;

            return (
              <div
                key={category}
                className="flex justify-between items-center w-full border-b border-[#849992] py-1 border-dotted font-bold"
              >
                <h1 className="w-full text-sm font-bold ">
                  {categoryTranslations[category]}
                </h1>
                <h1 className="w-full text-sm font-bold text-end">
                  {totalBudget.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h1>
                <h1 className="w-full text-sm font-bold text-end">
                  {mustSpend.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h1>
                <h1
                  className={`w-full text-sm font-bold text-end ${
                    utilizedBudget > 100 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {utilizedBudget.toFixed(2)}%
                </h1>
                <h1 className="w-full text-sm font-bold text-end">
                  {(
                    (totalBudget /
                      ((income *
                        (chartData.reduce(
                          (acc, curr) => acc + curr.percentage,
                          0
                        ) || 0)) /
                        100)) *
                    100
                  ).toFixed(2)}
                  %
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4">
        <div>
          <h1 className="text-green-500 font-bold text-xl">
            {outcome.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
          <p className="text-xs font-bold">Total gastos</p>
        </div>
        <div>
          <h1 className="text-red-500 font-bold text-xl">
            {income.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
          <p className="text-xs font-bold">Total a gastar</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">
            {((outcome / income) * 100).toFixed(2)}%
          </h1>
          <p className="text-xs font-bold">Utilizado</p>
        </div>
      </div>
    </div>
  );
};

export default OutcomeResumed;
