var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")

var peliculas = db.sequelize.define('peliculas', {
  name: Sequelize.STRING,
  image: Sequelize.STRING(200),
  },
  {
   timestamps: false,
   createdAt: false,
  });

module.exports = peliculas;
