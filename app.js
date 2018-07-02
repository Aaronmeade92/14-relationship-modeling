'use strict';

import express from 'express';
import router from './src/api.js';

const app = express();
app.use(router);
app.use(express.json());

module.exports = {

  start: port => app.listen(port, console.log('Listening on PORT', port)),
  stop: () => app.close(),
  server: app,
};