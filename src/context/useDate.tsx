import { create } from "zustand";

type dateStore = {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
};

const useDate = create<dateStore>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (date) => set({ selectedDate: date }),
}));

export { useDate };
