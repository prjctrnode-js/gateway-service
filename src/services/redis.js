const Redis = require('ioredis');

const port = process.env.REDIS_PORT;
const host = process.env.REDIS_HOST;

const redis = new Redis(port, host);

module.exports = redis;
