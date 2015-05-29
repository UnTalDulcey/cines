var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")
var peliculas = require('./peliculas');

var funciones = db.sequelize.define('funciones', {
  hour:{
    type: Sequelize.STRING,
    primaryKey: true,
  },
  day:{
    type: Sequelize.DATE,
    primaryKey: true,
  } ,
  tipo:{
      type:   Sequelize.ENUM,
      values: ['2D', '3D','2D - 3D'],
      primaryKey: true,
  }
  ,
  peliculaId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
              model: peliculas,
              key:   'id',
            }
  },
},
  {
   timestamps: false,
   createdAt: false,
});

//http://www.imdb.com/showtimes/cinema/US/ci1030037/
//http://www.imdb.com/showtimes/cinema/ES/ci1030038
//http://www.imdb.com/showtimes/cinema/ES/ci61874426

module.exports = funciones;
