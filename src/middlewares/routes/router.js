const Router = require('@koa/router');
const pJson = require('../../../package.json');

const router = new Router();

router.get('/gateway/health', (ctx) => {
  ctx.set({ 'Content-Type': 'application/json' });
  ctx.body = {
    success: true,
    message: `Name ${pJson.name}, version ${pJson.version}`,
  };
});

module.exports = router;
