const proxy = require('koa-better-http-proxy');
const db = require('../db/models');
const checkToken = require('../helpers/checkToken');

const proxyMiddlware = proxy('http', {
  filter(ctx) {
    return ctx.url !== '/gateway/health';
  },
  async proxyReqOptDecorator(proxyReqOpts, ctx) {
    const path = ctx.path.split('/')[1];
    const modProxyReqOpts = proxyReqOpts;
    const settings = await db.Services.findOne({
      where: {
        path,
      },
    });
    modProxyReqOpts.headers = ctx.headers;
    modProxyReqOpts.headers['g-token'] = await checkToken(ctx.headers['g-token'])
      ? settings.token
      : null;
    modProxyReqOpts.port = settings.port;
    modProxyReqOpts.host = settings.host;

    return proxyReqOpts;
  },
  parseReqBody: false,
});

module.exports = proxyMiddlware;
