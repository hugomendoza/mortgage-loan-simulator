export type Status = 'approved' | 'decline' | 'refer';

export interface Mortgage {
  id: string;
  debtToIncome: string;
  loanToValue: string;
  status: Status;
  reasons: string[];
  createdAt: Date;
}
