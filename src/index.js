const Koa = require('koa');
const router = require('./middlewares/routes/router');
require('dotenv-defaults').config();
const errorHandler = require('./middlewares/errorHandler');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const logger = require('./helpers/logger');
const proxyMiddlware = require('./middlewares/proxyMiddlware');

const app = new Koa();
app.use(loggerMiddleware);
app.use(errorHandler());
app.use(router.allowedMethods());
app.use(proxyMiddlware);
app.use(router.routes());

app.listen(process.env.PORT, () => {
  logger.log({
    message: `Server running at port ${process.env.PORT}`,
    level: 'info'
  });
});
