import api from '../api/api';
import type { Mortgage } from '../interfaces';

interface Args {
  monthlyIncome: number;
  monthlyDebts: number;
  loanAmount: number;
  propertyValue: number;
  creditScore: number;
  occupancyType: string;
}

export const createMortgage = async (args: Args) => {
  return await api.post<Mortgage>('/mortgage', args);
};

export const getMortgages = async () => {
  return await api.get<Mortgage[]>('/mortgage');
};
