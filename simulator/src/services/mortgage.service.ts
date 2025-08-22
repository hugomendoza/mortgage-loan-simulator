import api from '../api/api';
import type { Mortgage } from '../interfaces';

interface Args {
  monthlyIncome: Number;
  monthlyDebts: Number;
  loanAmount: Number;
  propertyValue: Number;
  creditScore: Number;
  occupancyType: String;
}

export const createMortgage = async (args: Args) => {
  return await api.post<Mortgage>('/mortgage', args);
};

export const getMortgages = async () => {
  return await api.get<Mortgage[]>('/mortgage');
};
