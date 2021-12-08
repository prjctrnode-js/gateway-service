const proxy = require('koa-better-http-proxy');
const db = require('../db/models');

const proxyMiddlware = proxy('http', {
  filter(ctx) {
    return ctx.url !== '/gateway/health';
  },
  async proxyReqOptDecorator(proxyReqOpts, ctx) {
    const path = ctx.path.split('/')[1];
    const modProxyReqOpts = proxyReqOpts;
    const settigs = await db.Services.findOne({
      where: {
        path
      }
    });
    modProxyReqOpts.headers = ctx.headers;
    modProxyReqOpts.port = settigs.port;
    modProxyReqOpts.host = settigs.host;
    return proxyReqOpts;
  },
  parseReqBody: false
});

module.exports = proxyMiddlware;
