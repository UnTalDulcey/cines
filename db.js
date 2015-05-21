var Sequelize = require("sequelize")
var sequelize = new Sequelize('cines-app-db', 'cine', 'cines.2015', {
  host: "cines-app.database.windows.net",
  port: 1433,
  dialect: 'mssql',
})
sequelize.authenticate().then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });
module.exports = {
  sequelize: sequelize,
}
