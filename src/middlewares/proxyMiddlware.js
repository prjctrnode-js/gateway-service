const proxy = require('koa-better-http-proxy');
const checkToken = require('../helpers/checkToken');

const proxyMiddlware = proxy('http', {
  filter(ctx) {
    return ctx.url !== '/gateway/health';
  },
  async proxyReqOptDecorator(proxyReqOpts, ctx) {
    const { pathSettings } = ctx;
    const modProxyReqOpts = proxyReqOpts;
    modProxyReqOpts.headers = ctx.headers;
    modProxyReqOpts.headers['g-token'] = (await checkToken(
      ctx.headers['g-token']
    ))
      ? pathSettings.token
      : null;
    modProxyReqOpts.port = pathSettings.port;
    modProxyReqOpts.host = pathSettings.host;

    return proxyReqOpts;
  },
  parseReqBody: false,
});

module.exports = proxyMiddlware;
