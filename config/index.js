const publicRoutes = require('./rest/publicRoutes');

const config = {
  publicRoutes,
  port: process.env.PORT || '2017',
};

module.exports = config;
