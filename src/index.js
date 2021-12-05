const Koa = require('koa');
const router = require('./middlewares/routes/router');
require('dotenv-defaults').config();
const errorHandler = require('./middlewares/errorHandler');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const logger = require('./helpers/logger');
const db = require('./db/models');
const proxy = require('koa-better-http-proxy');

const app = new Koa();
app.use(loggerMiddleware);
app.use(errorHandler());
app.use(router.allowedMethods());

app.use(
  proxy('http://127.0.0.1', {
    filter: function (ctx) {
      return ctx.url !== '/gateway/health';
    },
    proxyReqOptDecorator: async function (proxyReqOpts, ctx) {
      const path = ctx.path.split('/')[1];
      const settigs = await db.Services.findOne({
        where: {
          path: path,
        },
      });
      proxyReqOpts.headers = ctx.headers;
      proxyReqOpts.port = settigs.port;
      return proxyReqOpts;
    },
    parseReqBody: false,
  })
);
app.use(router.routes());

app.listen(process.env.PORT, () => {
  logger.log({
    message: `Server running at port ${process.env.PORT}`,
    level: 'info',
  });
});
