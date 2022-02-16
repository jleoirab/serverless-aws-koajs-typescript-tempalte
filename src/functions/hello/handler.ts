import 'source-map-support/register';
import ServerlessHttp from 'serverless-http';
import app from '../../server';

export const main: ServerlessHttp.Handler = ServerlessHttp(app, {});