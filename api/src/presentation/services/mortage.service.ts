import { prisma } from '../../data/postgres-db';
import {
  CreateMortgageDto,
  CustomError,
  MortgageEntity,
  MortgageResponseDto,
} from '../../domain';
import { calculateStatus } from '../../config';

export class MortgageService {
  constructor() {}

  async createMortgage(
    createMortgageDto: CreateMortgageDto
  ): Promise<MortgageResponseDto> {
    try {
      const {
        monthlyIncome,
        monthlyDebts,
        loanAmount,
        propertyValue,
        creditScore,
      } = createMortgageDto;

      const debtToIncome = monthlyDebts / monthlyIncome;
      const loanToValue = loanAmount / propertyValue;

      const statusMortgage = calculateStatus({
        creditScore,
        debtToIncome,
        loanToValue,
      });

      const mortgage = await prisma.mortgage.create({
        data: {
          creditScore,
          debtToIncome,
          loanAmount,
          loanToValue,
          monthlyDebts,
          monthlyIncome,
          propertyValue,
          status: statusMortgage,
        },
      });

      const mortgageEntity = MortgageEntity.fromObject(mortgage);

      return MortgageResponseDto.fromEntity(mortgageEntity);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.error(error);
      throw CustomError.internalServer('Error interno del servidor');
    }
  }

  async getMortgages(): Promise<MortgageResponseDto[]> {
    try {
      const mortgages = await prisma.mortgage.findMany();

      return mortgages.map((mortgage) =>
        MortgageResponseDto.fromEntity(MortgageEntity.fromObject(mortgage))
      );
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      console.error(error);
      throw CustomError.internalServer('Error interno del servidor');
    }
  }
}
