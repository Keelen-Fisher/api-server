'use strict';

const express = require('express');
const peopleRouter = require('./routes/people');
const foodRouter = require('./routes/food');
const nintendoRouter = require('./routes/nintendo');
const logger = require('./middleware/logger');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(peopleRouter);
app.use(foodRouter);
app.use(nintendoRouter);
app.use(logger);



function start(){
  app.listen(PORT, () => console.log('listening on port', PORT ));
}

module.exports = { app, start };