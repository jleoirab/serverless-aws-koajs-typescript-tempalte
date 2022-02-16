import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import RootRouter from './routes/root';

const app = new Koa();

app.use(bodyParser({ enableTypes: ['json', 'text'], jsonLimit: '10mb' }));

app.use(cors());
app.proxy = true;

[
  RootRouter,

  // Add Routers to this list
].forEach((router: Router) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
});

export default app;