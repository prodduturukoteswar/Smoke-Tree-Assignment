const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

class Address extends Model {}

Address.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { sequelize, modelName: 'Address' });

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = Address;
