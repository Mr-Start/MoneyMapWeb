import { create } from "zustand";

const chartData = [
  { category: "fixed", percentage: 30, fill: "var(--chart-1)" },
  { category: "confort", percentage: 15, fill: "var(--chart-2)" },
  { category: "goals", percentage: 15, fill: "var(--chart-3)" },
  { category: "joy", percentage: 10, fill: "var(--chart-4)" },
  { category: "investment", percentage: 25, fill: "var(--chart-5)" },
  { category: "study", percentage: 5, fill: "var(--chart-6)" },
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
