import { create } from "zustand";

type outcomeStore = {
  outcome: number;
  setdOutcome: (outcome: number) => void;
};

const useOutcome = create<outcomeStore>((set) => ({
  outcome: 1500,
  setdOutcome: (outcome) => set({ outcome }),
}));

export { useOutcome };
