const redis = require('../services/redis');
const db = require('../db/models');

const pathFromCache = async (ctx, next) => {
  const path = ctx.path.split('/')[1];
  const settingsCache = await redis.get('settings');
  if (settingsCache) {
    ctx.pathSettings = JSON.parse(settingsCache).find((i) => i.path === path);
    return next();
  }
  const settingsDb = await db.Services.findAll({raw: true});
  await redis.set('settings', JSON.stringify(settingsDb));
  ctx.pathSettings = settingsDb.find((i)=>i.path === path)
  return next();
};

module.exports = pathFromCache;
