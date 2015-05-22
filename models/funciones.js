var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")
var peliculas = require('./peliculas');
var cines = require('./cines');

var funciones = db.sequelize.define('funciones', {
  hour:{
    type: Sequelize.STRING,
    primaryKey: true,
  },
  day:{
    type: Sequelize.DATE,
    primaryKey: true,
  } ,
  peliculaId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: peliculas,
              key:   'id',

            }
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


module.exports = funciones;
