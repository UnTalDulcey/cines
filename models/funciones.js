var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")
var peliculas = require('./peliculas');
var cines = require('./cines');

var funciones = db.sequelize.define('funciones', {
  hour:Sequelize.INTEGER,
  day: Sequelize.DATE,
},
  {
   timestamps: false,
   createdAt: false,
});
peliculas.belongsToMany(cines,{ through: funciones })
cines.belongsToMany(peliculas,{through: funciones})

module.exports = funciones;
