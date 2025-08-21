import { Router } from 'express';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use('/api/v1/token', (req, res) => {
      res.send('token');
    });
    return router;
  }
}
