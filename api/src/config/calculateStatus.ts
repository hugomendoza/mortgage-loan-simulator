import { MortgageStatus } from '@prisma/client';

interface ValuesMortgage {
  debtToIncome: number;
  loanToValue: number;
  creditScore: number;
}

export function calculateStatus({
  creditScore,
  debtToIncome,
  loanToValue,
}: ValuesMortgage): MortgageStatus {
  if (debtToIncome <= 0.43 && loanToValue <= 0.8 && creditScore >= 680) {
    return 'APPROVED';
  }

  if (debtToIncome <= 0.5 && loanToValue <= 0.95 && creditScore >= 660) {
    return 'REFER';
  }

  return 'DECLINE';
}
