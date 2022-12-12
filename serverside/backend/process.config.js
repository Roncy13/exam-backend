const env = require('dotenv').config({ path: '.env' }).parsed;

const mainApp = {
  name: 'BACKEND',
  script: './dist/server.js',
  exec_mode: 'cluster',
  env,
  instances: 'max',
};

const apps = [mainApp];

module.exports = { apps };
