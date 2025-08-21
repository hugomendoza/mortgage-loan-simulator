import { MortgageStatus } from '@prisma/client';

export class MortgageResponseDto {
  constructor(
    public readonly id: string,
    public readonly debtToIncome: number,
    public readonly loanToValue: number,
    public readonly status: MortgageStatus,
    public readonly createdAt: Date
  ) {}

  static fromEntity(entity: {
    id: string;
    debtToIncome: number;
    loanToValue: number;
    status: MortgageStatus;
    createdAt: Date;
  }): MortgageResponseDto {
    return new MortgageResponseDto(
      entity.id,
      entity.debtToIncome,
      entity.loanToValue,
      entity.status,
      entity.createdAt
    );
  }
}
