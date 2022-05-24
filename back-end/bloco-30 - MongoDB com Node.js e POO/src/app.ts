import express, { json } from 'express';
import createConnection from './models/connection';

class App {
  public express: express.Application;

  constructor(routes:express.Router, ) {
    this.express = express();
    this.middlewares();
    this.routes(routes);

    createConnection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(routes: express.Router) {
    this.express.use(routes);
  }
}

export default App;