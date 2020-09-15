const DbConnection = require('../database/connection');
const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(DbConnection);

class UserModel extends Model {
}

UserModel.init({
    ID:DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    sequelize,
    modelName: 'users'
});

module.exports = UserModel;
