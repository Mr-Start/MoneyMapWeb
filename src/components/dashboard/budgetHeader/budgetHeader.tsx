import { Button } from "@/components/ui/button";
import { DatePicker } from "./datePicker";
import { IncomePopover } from "./incomePopover";

const BudgetHeader = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <h1 className="font-bold text-3xl">Orçamento doméstico</h1>
        <h2>
          Controle seu orçamento doméstico com base em suas próprias metas e
          rendimentos.
        </h2>
      </div>
      <div className="flex items-center gap-2">
        <DatePicker />
        <IncomePopover />
      </div>
    </div>
  );
};

export default BudgetHeader;
