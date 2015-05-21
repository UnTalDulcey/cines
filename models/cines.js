var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")
var ciudades = require('./ciudades');

var cines = db.sequelize.define('cines', {
  name: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.STRING,
},
  {
   timestamps: false,
   createdAt: false,
});


cines.belongsTo(ciudades,{as: 'ciudad'})

module.exports = cines;
