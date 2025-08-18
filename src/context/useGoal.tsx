import { create } from "zustand";

const chartData = [
  {
    category: "fixed",
    label: "Custos Fixos",
    percentage: 30,
    fill: "var(--chart-1)",
    color: "chart-1",
  },
  {
    category: "confort",
    label: "Conforto",
    percentage: 15,
    fill: "var(--chart-2)",
    color: "chart-2",
  },
  { 
    category: "goals", 
    label: "Metas", 
    percentage: 15, 
    fill: "var(--chart-3)",
    color: "chart-3", 
  },
  {
    category: "joy",
    label: "Prazeres",
    percentage: 10,
    fill: "var(--chart-4)",
    color: "chart-4",
  },
  {
    category: "investment",
    label: "Liberdade Financeira",
    percentage: 25,
    fill: "var(--chart-5)",
    color: "chart-5",
  },
  {
    category: "study",
    label: "Conhecimento",
    percentage: 5,
    fill: "var(--chart-6)",
    color: "chart-6",
  },
];

type goalStore = {
  chartData: typeof chartData;
  setChartData: (data: typeof chartData) => void;
};

const useGoal = create<goalStore>((set) => ({
  chartData,
  setChartData: (data) => set({ chartData: data }),
}));

export { useGoal };
