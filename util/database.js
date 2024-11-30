const Sequelize = require("sequelize");

const sequelize = new Sequelize("database-name", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
