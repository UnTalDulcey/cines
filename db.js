var Sequelize = require("sequelize")
var sequelize = new Sequelize('cines', 'cine', 'cines.2015', {
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
})
module.exports = {
  sequelize: sequelize,
}
