var db = require('../db');
var logger = require('../logger');
var Sequelize = require("sequelize")

var cines = db.sequelize.define('cines', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey:true,
    unique: true,
    autoIncrement: true,
  },
  name:{
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  phone: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
},
  {
   timestamps: false,
   createdAt: false,
});

module.exports = cines;
