import express, { Router } from 'express';
import cors from 'cors';
import http from 'http';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
}

export class Server {
  public readonly app = express();
  private serverListener?: http.Server;
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(cors());
    this.app.use(express.static('public'));
    this.app.use(this.routes);

    this.app.get('/*splat', (req, res) => {
      const indexPath = path.join(__dirname + '../../../public/index.html');
      res.sendFile(indexPath);
    });

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  public close() {
    this.serverListener?.close();
  }
}
