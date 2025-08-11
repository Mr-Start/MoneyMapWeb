import { create } from "zustand";

type incomeStore = {
  income: number;
  setIncome: (income: number) => void;
};

const useIncome = create<incomeStore>((set) => ({
  income: 3000,
  setIncome: (income) => set({ income }),
}));

export { useIncome };
