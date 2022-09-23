'use strict';


const { sequelizeDatabase, PeopleModel } = require('./src/modules');
const { start } = require('./src/server');

// creates all associated tables 
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    // this is dangerous: inserts everytime it is started: 
    // PeopleModel.create({name: 'Keelen});
  })
  .catch(err => console.error(err));

start();