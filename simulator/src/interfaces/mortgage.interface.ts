export interface Mortgage {
  id: string;
  debtToIncome: string;
  loanToValue: string;
  status: string;
  reasons: string[];
  createdAt: Date;
}
