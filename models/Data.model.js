const DbConnection = require('../database/connection');
const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = new Sequelize(DbConnection);

class DataModel extends Model {
}

DataModel.init({
    ID:DataTypes.INTEGER,
    ten_min: DataTypes.TEXT,
    distance: DataTypes.INTEGER,
    rws_0: DataTypes.TEXT,
    rws_1: DataTypes.DOUBLE,
    rws_2: DataTypes.TEXT,
    rws_3: DataTypes.DOUBLE,
    rws_availability_0: DataTypes.INTEGER,
    rws_availability_1: DataTypes.INTEGER,
    rws_availability_2: DataTypes.INTEGER,
    rws_availability_3: DataTypes.INTEGER,
    hws_availability_high: DataTypes.DOUBLE,
    hws_availability_low: DataTypes.DOUBLE,
    hws_availability_hub: DataTypes.DOUBLE,
    ti_0: DataTypes.TEXT,
    ti_1: DataTypes.DOUBLE,
    ti_2: DataTypes.TEXT,
    ti_3: DataTypes.DOUBLE,
    cnr_0: DataTypes.TEXT,
    cnr_1: DataTypes.DOUBLE,
    cnr_2: DataTypes.TEXT,
    cnr_3: DataTypes.DOUBLE,
    tilt: DataTypes.DOUBLE,
    roll: DataTypes.DOUBLE,
    u_high: DataTypes.TEXT,
    u_low: DataTypes.TEXT,
    v_high: DataTypes.TEXT,
    v_low: DataTypes.TEXT,
    height_high: DataTypes.DOUBLE,
    height_low: DataTypes.DOUBLE,
    hws_high: DataTypes.TEXT,
    hws_low: DataTypes.TEXT,
    direction_high: DataTypes.TEXT,
    direction_low: DataTypes.TEXT,
    shear: DataTypes.TEXT,
    veer: DataTypes.TEXT,
    hws_hub: DataTypes.TEXT,
    direction_hub: DataTypes.TEXT,
    ti_high: DataTypes.TEXT,
    ti_low: DataTypes.TEXT,
    ti_gain: DataTypes.TEXT,
    ti_hub: DataTypes.TEXT,
}, {
    sequelize,
    modelName: 'sample_data'
});

module.exports = DataModel;
