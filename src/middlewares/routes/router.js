const Router = require('@koa/router');
const router = new Router();
const pJson = require('../../../package.json');
const url = require('url');

router.get('/gateway/health', async (ctx) => {
  ctx.set({ 'Content-Type': 'application/json' });
  ctx.status = 200;
  ctx.body = JSON.stringify({
    succes: `Name ${pJson.name}, version ${pJson.version}`,
  });
});

module.exports = router;
