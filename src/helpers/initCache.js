const redis = require('../services/redis');
const db = require('../db/models');

const initCache = async () => {
  const settingsDb = await db.Services.findAll({ raw: true });
  await redis.set('settings', JSON.stringify(settingsDb));
};

module.exports = initCache;
