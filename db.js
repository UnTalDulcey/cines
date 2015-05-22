var Sequelize = require("sequelize")
var sequelize = new Sequelize('cines', 'root', 'mdulcey93', {
  host: "107.170.248.123",
  port: 3306,
  dialect: 'mysql',
})
module.exports = {
  sequelize: sequelize,
}
