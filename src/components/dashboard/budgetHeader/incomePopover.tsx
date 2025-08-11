"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useIncome } from "@/context/useIncome";
import { Check, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

const fakeData = [
  { id: 1, name: "Salary", amount: 5000 },
  { id: 2, name: "Freelancasdasdasdasde", amount: 2000 },
];

export function IncomePopover() {
  const [incomeData, setIncomeData] = useState(fakeData);
  const { income, setIncome } = useIncome();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative">
          <span className="absolute -top-6 left-0 text-xs text-primary rounded-full">
            Renda do mês
          </span>
          {income.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg mb-2">Entradas de valor</h3>
            <div className="grid gap-2">
              {incomeData.map((income) => (
                <div
                  key={income.id}
                  className="flex items-center justify-between gap-2"
                >
                  <Label className="block break-all text-center max-w-1/3 w-full">
                    {income.name}
                  </Label>
                  <Input
                    type="number"
                    defaultValue={income.amount}
                    className="w-fit"
                  />
                  <Button variant={`ghost`} size="icon">
                    <Check className="text-white" />
                  </Button>
                  <Button variant={`ghost`} size="icon">
                    <Trash2 className="text-red-500" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Separator className="" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-lg mb-2">Adicionar nova entrada</h1>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Nome da entrada"
                className="mb-2"
              />
              <Input type="number" placeholder="Valor" className="mb-2" />
              <Button variant="ghost">
                <Plus className="" />
              </Button>
            </div>
          </div>
          <Button className="text-white self-end">Salvar entradas</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
