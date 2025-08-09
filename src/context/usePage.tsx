import { create } from "zustand";

type pageStore = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const usePage = create<pageStore>((set) => ({
  selectedPage: "Orçamento Doméstico",
  setSelectedPage: (page) => set({ selectedPage: page }),
}));

export { usePage };
