import { MortgageStatus } from '@prisma/client';

interface ValuesMortgage {
  debtToIncome: number;
  loanToValue: number;
  creditScore: number;
}

export interface MortgageDecision {
  status: MortgageStatus;
  reasons: string[];
}

const APPROVED_DTI = 0.43;
const APPROVED_LTV = 0.8;
const APPROVED_CREDIT_SCORE = 680;

const REFER_DTI = 0.5;
const REFER_LTV = 0.95;
const REFER_CREDIT_SCORE = 660;

export function calculateStatusWithReasons({
  creditScore,
  debtToIncome,
  loanToValue,
}: ValuesMortgage): MortgageDecision {
  const isApproved =
    debtToIncome <= APPROVED_DTI &&
    loanToValue <= APPROVED_LTV &&
    creditScore >= APPROVED_CREDIT_SCORE;

  if (isApproved) {
    return {
      status: 'APPROVED',
      reasons: ['The request meets all automatic approval criteria.'],
    };
  }

  const declineReasons: string[] = [];

  if (debtToIncome > REFER_DTI) {
    declineReasons.push(
      `Your debt-to-income ratio (DTI) of ${debtToIncome.toFixed(2)} exceeds the maximum limit of ${REFER_DTI}.`
    );
  }
  if (loanToValue > REFER_LTV) {
    declineReasons.push(
      `Your loan-to-value ratio (LTV) of ${loanToValue.toFixed(2)} exceeds the maximum limit of ${REFER_LTV}.`
    );
  }
  if (creditScore < REFER_CREDIT_SCORE) {
    declineReasons.push(
      `Your credit score of ${creditScore} is lower than the minimum required of ${REFER_CREDIT_SCORE}.`
    );
  }

  if (declineReasons.length > 0) {
    return { status: 'DECLINE', reasons: declineReasons };
  }

  const referReasons: string[] = [];
  referReasons.push(
    'The request requires manual review as it does not meet all automatic approval criteria.'
  );

  if (debtToIncome > APPROVED_DTI) {
    referReasons.push(
      `The debt-to-income ratio (DTI) (${debtToIncome.toFixed(2)}) is higher than the ideal for approval (${APPROVED_DTI}).`
    );
  }
  if (loanToValue > APPROVED_LTV) {
    referReasons.push(
      `The loan-to-value ratio (LTV) (${loanToValue.toFixed(2)}) is higher than the ideal for approval (${APPROVED_LTV}).`
    );
  }
  if (creditScore < APPROVED_CREDIT_SCORE) {
    referReasons.push(
      `The credit score (${creditScore}) is lower than the ideal for approval (${APPROVED_CREDIT_SCORE}).`
    );
  }

  return { status: 'REFER', reasons: referReasons };
}
