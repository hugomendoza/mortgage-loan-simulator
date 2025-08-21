import { MortgageStatus } from '@prisma/client';
import { CustomError } from '../errors/custom.error';

/* eslint-disable @typescript-eslint/no-explicit-any */
export class MortgageEntity {
  constructor(
    public id: string,
    public monthlyIncome: number,
    public monthlyDebts: number,
    public loanAmount: number,
    public propertyValue: number,
    public creditScore: number,
    public debtToIncome: number,
    public loanToValue: number,
    public status: MortgageStatus,
    public createdAt: Date
  ) {}

  static fromObject(object: { [key: string]: any }) {
    const {
      id,
      monthlyIncome,
      monthlyDebts,
      loanAmount,
      propertyValue,
      creditScore,
      debtToIncome,
      loanToValue,
      status,
      createdAt,
    } = object;

    if (!id) {
      throw CustomError.badRequest('The id is missing');
    }

    if (monthlyIncome === null) {
      throw CustomError.badRequest('The monthly income is missing');
    }

    if (monthlyDebts === null) {
      throw CustomError.badRequest('The monthly debts is missing');
    }

    if (loanAmount === null) {
      throw CustomError.badRequest('The loan amount is missing');
    }

    if (propertyValue === null) {
      throw CustomError.badRequest('The property value is missing');
    }

    if (creditScore === null) {
      throw CustomError.badRequest('The credit score is missing');
    }

    if (creditScore === null) {
      throw CustomError.badRequest('The credit score is missing');
    }

    if (debtToIncome === null) {
      throw CustomError.badRequest('The debt to income is missing');
    }

    if (loanToValue === null) {
      throw CustomError.badRequest('The loan to value is missing');
    }

    if (!status) {
      throw CustomError.badRequest('The status is missing');
    }

    if (!createdAt) {
      throw CustomError.badRequest('The created at date is missing');
    }

    return new MortgageEntity(
      id,
      monthlyIncome,
      monthlyDebts,
      loanAmount,
      propertyValue,
      creditScore,
      debtToIncome,
      loanToValue,
      status,
      createdAt
    );
  }
}
