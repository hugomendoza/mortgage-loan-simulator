import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createMortgageSlice, type MortgageSlice } from './mortgage.slice';

type ShareState = MortgageSlice;

export const useMortgageSimulator = create<ShareState>()(
  devtools(
    persist(
      (...a) => ({
        ...createMortgageSlice(...a),
      }),
      {
        name: 'mortgage-simulator',
      }
    ),
    { name: 'mortgage-simulator' }
  )
);
