var Sequelize = require("sequelize")
var sequelize = new Sequelize('cines', 'cineuser', 'cines.2015', {
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
})
module.exports = {
  sequelize: sequelize,
}
