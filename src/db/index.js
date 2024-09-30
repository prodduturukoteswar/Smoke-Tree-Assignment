const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

console.log("Connecting to database:", process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
});

module.exports = sequelize;

