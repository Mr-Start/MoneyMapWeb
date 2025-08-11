"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "fixed", money: 275, fill: "var(--chart-1)" },
  { category: "confort", money: 200, fill: "var(--chart-2)" },
  { category: "goals", money: 287, fill: "var(--chart-3)" },
  { category: "joy", money: 173, fill: "var(--chart-4)" },
  { category: "investment", money: 190, fill: "var(--chart-5)" },
  { category: "study", money: 190, fill: "var(--chart-6)" },
];

const chartConfig = {
  money: {
    label: "Money",
  },
  fixed: {
    label: "Custos Fixos",
    color: "var(--chart-1)",
  },
  confort: {
    label: "Conforto",
    color: "var(--chart-2)",
  },
  goals: {
    label: "Metas",
    color: "var(--chart-3)",
  },
  joy: {
    label: "Prazeres",
    color: "var(--chart-4)",
  },
  investment: {
    label: "Liberdade Financeira",
    color: "var(--chart-5)",
  },
  study: {
    label: "Conhecimento",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

const ChartPieDonutText = () => {
  const totalMoney = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.money, 0);
  }, []);

  return (
    <Card className="flex flex-col w-full bg-secundary p-8">
      <CardHeader className="items-center p-0">
        <h1 className="text-primary text-2xl font-bold">Gastos</h1>
      </CardHeader>
      <CardContent className="flex-1 p-0 w-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[21rem]"
        >
          <PieChart className="">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="money"
              nameKey="category"
              innerRadius={80}
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {totalMoney.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm"></CardFooter>
    </Card>
  );
};

export { ChartPieDonutText };
