'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const peopleSchema = require('./person.schema');
const foodSchema = require('./food.schema');
const nintendoSchema = require('./nintendo.schema');
const CollectionClass = require('./collection-class');
// instantiate:
// const ModelInterface = require(./modelInterface);

//  'postgres://localhost:5432/api-app'
// with password: 'postgres://username:password@localhost:5432/api-app'
// ternary: WTF what(conditional) ? return if TRUE : else return if FALSE
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL;

// instantiates our database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create PeopleModel with our Schema
const PeopleModel = peopleSchema(sequelizeDatabase, DataTypes);

const foodModel = foodSchema(sequelizeDatabase, DataTypes);

const nintendoModel = nintendoSchema(sequelizeDatabase, DataTypes);

// Setting up the join 
foodModel.hasMany(nintendoModel);
nintendoModel.belongsTo(foodModel);


// to run this after you have created the sync function -> node src/models/index.js

module.exports = { 
  sequelizeDatabase, 
  PeopleModel, 
  foodInterface: new CollectionClass(foodModel), 
  nintendoInterface:  new CollectionClass(nintendoModel),
  // foodInterface: new ModelInterface(each model above ex: foodModel)
};
