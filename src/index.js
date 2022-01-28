const Koa = require('koa');
const router = require('./middlewares/routes/router');
require('dotenv-defaults').config();
const errorHandler = require('./middlewares/errorHandler');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const logger = require('./helpers/logger');
const proxyMiddlware = require('./middlewares/proxyMiddlware');
const pathFromCache = require('./middlewares/pathFromCache')
const initCache = require('./helpers/initCache')

const app = new Koa();
app.use(loggerMiddleware);
app.use(errorHandler());
app.use(router.allowedMethods());
app.use(pathFromCache);
app.use(proxyMiddlware);
app.use(router.routes());

app.listen(process.env.PORT, () => {
  initCache()
  logger.log({
    message: `Server running at port ${process.env.PORT}`,
    level: 'info'
  });
});
