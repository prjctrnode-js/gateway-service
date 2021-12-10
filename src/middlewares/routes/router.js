const Router = require('@koa/router');

const router = new Router();
const gatewayHealth = require('../../controllers/gatewayHealth');

router.get('/gateway/health', gatewayHealth);

module.exports = router;
