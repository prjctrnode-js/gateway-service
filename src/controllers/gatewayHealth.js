const pJson = require('../../package.json');

const gatewayHealth = async (ctx) => {
    ctx.set({ 'Content-Type': 'application/json' });
    ctx.body = JSON.stringify({
      success: true,
      message: `Name ${pJson.name}, version ${pJson.version}`,
    });
};

module.exports = gatewayHealth;