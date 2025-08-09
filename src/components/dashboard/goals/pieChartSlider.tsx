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
import { useGoal } from "@/context/useGoal";

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

const PieChartSlider = () => {
  const { chartData } = useGoal();

  // const totalPercentage = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.percentage, 0);
  // }, []);
  const totalPercentage = 100;

  return (
    <Card className="flex flex-col max-w-[30rem] bg-secundary p-8">
      <CardHeader className="items-center p-0">
        <h1 className="text-primary text-2xl font-bold">Gastos</h1>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[21rem]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="category"
              innerRadius={85}
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
                          R${totalPercentage.toLocaleString()}
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

export { PieChartSlider };
