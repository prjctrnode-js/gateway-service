const db = require('../db/models');

const checkToken = async (token) => {
  if (!token) return false;
  const tokenBd = await db.Services.findOne({
    where: {
      token,
    },
  });
  if (!tokenBd) return false;
  return true;
};
module.exports = checkToken;
