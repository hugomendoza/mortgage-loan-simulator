import { Request, Response } from 'express';
import { CreateMortgageDto, CustomError } from '../../domain';
import { MortgageService } from '../services/mortage.service';

export class MortgageController {
  constructor(private readonly mortgageService: MortgageService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Internal server error' });
  };

  createMortgage = (req: Request, res: Response) => {
    const [error, createMortgageDto] = CreateMortgageDto.create(req.body);

    if (error) return res.status(400).json({ error });

    this.mortgageService
      .createMortgage(createMortgageDto!)
      .then((mortgage) => res.status(201).json(mortgage))
      .catch((error) => this.handleError(error, res));
  };

  getMortgages = (req: Request, res: Response) => {
    this.mortgageService
      .getMortgages()
      .then((mortgages) => res.status(200).json(mortgages))
      .catch((error) => this.handleError(error, res));
  };
}
