var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")
var cines = require('./cines');

var peliculas = db.sequelize.define('peliculas', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey:true,
    unique: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  image: {
    type: Sequelize.STRING(500),
  },
  duration: {
    type: Sequelize.STRING(),
  },
  hour:{
    type: Sequelize.STRING,
    primaryKey: true,
  },
  day:{
    type: Sequelize.DATEONLY,
    primaryKey: true,
  },
  tipo:{
      type:   Sequelize.ENUM,
      values: ['2D', '3D','2D - 3D'],
      primaryKey: true,
  },
  cineId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: cines,
              key:   'id',
            }
          }
  },
  {
   timestamps: false,
   createdAt: false,
  });

module.exports = peliculas;
