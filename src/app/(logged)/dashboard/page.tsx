"use client";

import BudgetHeader from "@/components/dashboard/budgetHeader/budgetHeader";
import CategoryCard from "@/components/dashboard/category/categoryCard";
import CategorySlider from "@/components/dashboard/goals/categorySlider";
import { PieChartSlider } from "@/components/dashboard/goals/pieChartSlider";
import OutcomeHandle from "@/components/dashboard/outcomeHandle/outcomeHandle";
import OutcomeResumed from "@/components/dashboard/outcomeResumed";
import { ChartPieDonutText } from "@/components/dashboard/pieChart";
import { ModeToggle } from "@/components/theme.button";
import { usePage } from "@/context/usePage";

export default function DashboardPage() {
  const { selectedPage } = usePage();

  return (
    <div className="flex flex-col h-full self-center justify-self-center w-full">
      {selectedPage === "Minhas Metas" ? (
        <div className="h-full w-full flex flex-col gap-8 items-center mt-24">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="font-bold text-3xl">Metas</h1>
              <h2>Edite os itens abaixo para ajustar suas metas.</h2>
            </div>
          </div>
          <div className="flex gap-4 w-full h-full">
            <PieChartSlider />
            <CategorySlider />
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-8 items-center mt-24">
          {/* <ModeToggle /> */}
          <BudgetHeader />
          <div className="flex gap-4 w-full h-full">
            <ChartPieDonutText />
            <OutcomeResumed />
            <CategoryCard />
          </div>
          <OutcomeHandle />
        </div>
      )}
    </div>
  );
}
