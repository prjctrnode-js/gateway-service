const proxy = require('koa-better-http-proxy');
const db = require('../db/models');
const setToken = require('../helpers/setToken')

const proxyMiddlware = proxy('http', {
  filter(ctx) {
    return ctx.url !== '/gateway/health';
  },
  async proxyReqOptDecorator(proxyReqOpts, ctx) {
    const path = ctx.path.split('/')[1];
    const token = setToken(path)
    const modProxyReqOpts = proxyReqOpts;
    const settings = await db.Services.findOne({
      where: {
        path
      }
    });
    modProxyReqOpts.headers = ctx.headers;
    modProxyReqOpts.headers['g-token'] = ctx.headers['g-token'] === token ? token : null
    modProxyReqOpts.port = settings.port;
    modProxyReqOpts.host = settings.host;

    return proxyReqOpts;
  },
  parseReqBody: false
});

module.exports = proxyMiddlware;
