import { Router } from 'express';
import { MortgageRoutes } from './simulator/routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/v1/mortgage', MortgageRoutes.routes);
    return router;
  }
}
