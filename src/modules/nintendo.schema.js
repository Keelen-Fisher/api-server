'use strict';


module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('nintendo', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};