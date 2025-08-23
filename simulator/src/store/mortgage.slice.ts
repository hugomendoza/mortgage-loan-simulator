import type { StateCreator } from 'zustand';
import type { Mortgage } from '../interfaces';

export interface MortgageSlice {
  mortgages: Mortgage[];
  addMortgage: (mortgage: Mortgage) => void;
}

export const createMortgageSlice: StateCreator<MortgageSlice> = (set) => ({
  mortgages: [],

  addMortgage: (mortgage) =>
    set(() => ({ mortgages: [{ ...mortgage }, mortgage] })),
});
