import { create } from "zustand";

export type Category =
  | "FIXED"
  | "CONFORT"
  | "GOALS"
  | "JOY"
  | "INVESTMENT"
  | "STUDY";

export const categoryTranslations = {
  FIXED: "Custos Fixos",
  CONFORT: "Conforto",
  GOALS: "Metas",
  JOY: "Prazeres",
  INVESTMENT: "Liberdade Financeira",
  STUDY: "Conhecimento",
};

export const allCategories: Category[] = [
  "FIXED",
  "CONFORT",
  "GOALS",
  "JOY",
  "INVESTMENT",
  "STUDY",
];

type categoryStore = {
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

const useCategory = create<categoryStore>((set) => ({
  selectedCategory: "FIXED",
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));

export { useCategory };
