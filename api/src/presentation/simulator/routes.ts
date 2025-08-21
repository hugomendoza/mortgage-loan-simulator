import { Router } from 'express';
import { MortgageService } from '../services/mortage.service';
import { MortgageController } from './controller';

export class MortgageRoutes {
  static get routes(): Router {
    const router = Router();
    const mortgageService = new MortgageService();
    const controller = new MortgageController(mortgageService);

    router.post('/', controller.createMortgage);
    return router;
  }
}
