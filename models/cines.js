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
  url: {
    type: Sequelize.STRING,
  },
  logo: {
    type: Sequelize.STRING,
  },
},
  {
   timestamps: false,
   createdAt: false,
  //  getterMethods: {
  //       fullUrl: function () {
  //           return this.getDataValue('url')+'hola';
  //       }
  //   },
});
//http://www.imdb.com/showtimes/cinema/US/ci1030037/
//http://www.imdb.com/showtimes/cinema/ES/ci1030038
//http://www.imdb.com/showtimes/cinema/ES/ci61874426

module.exports = cines;
