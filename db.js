const Sequelize = require('sequelize');

const db = new Sequelize(process.env.POSTGRESLINK);

module.exports = db;