var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")

var ciudades = db.sequelize.define('ciudades', {
  name: Sequelize.STRING,
},
  {
   timestamps: false,
   createdAt: false,
});

module.exports = ciudades;
