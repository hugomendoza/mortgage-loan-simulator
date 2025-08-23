import type { StateCreator } from 'zustand';
import type { Mortgage } from '../interfaces';

export interface MortgageSlice {
  mortgages: Mortgage[];
  onLoadMortages: (mortgages: Mortgage[]) => void;
  addMortgage: (mortgage: Mortgage) => void;
}

export const createMortgageSlice: StateCreator<MortgageSlice> = (set) => ({
  mortgages: [],

  onLoadMortages: (mortgages) => set(() => ({ mortgages })),
  addMortgage: (mortgage) =>
    set((state) => ({ mortgages: [...state.mortgages, mortgage] })),
});
