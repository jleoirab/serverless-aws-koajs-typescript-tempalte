import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'ANY',
        // this matches the base path
        path: '/',
      },
    },
    {
      http: {
        method: 'ANY',
        // this matches any path, the token 'any' doesn't mean anything special
        path: '/{any+}',
      },
    },
  ],
}
