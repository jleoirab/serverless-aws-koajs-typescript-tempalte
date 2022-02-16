import Router from "@koa/router";

const RootRouter = new Router({ prefix: '/' });

RootRouter.get('/', async ctx => {
  ctx.body = 'Hello World. This is the AWS KoaJS Typescript Template';
  ctx.status = 200;
});

export default RootRouter;