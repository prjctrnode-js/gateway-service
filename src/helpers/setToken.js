const setToken = (path) => {
  let token = '';
  switch (path) {
    case 'videos':
      token = process.env.VIDEO_TOKEN;
      break;
    case 'history':
      token = process.env.HISTORY_TOKEN;
      break;
    case 'subscriptions':
      token = process.env.SUBSCRIBE_TOKEN;
      break;
    case 'users':
      token = process.env.USERS_TOKEN;
      break;
    default:
      break;
  }
  return token;
};
module.exports = setToken;
