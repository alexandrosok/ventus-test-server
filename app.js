require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const app = express();
const port = 3000;
const {Sequelize} = require('sequelize');
const DbConnection = require('./database/connection');
const sequelize = new Sequelize(DbConnection);
const cors = require('cors');


async function TestConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

TestConnection();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routing
app.use('/', indexRouter);

module.exports = app;
console.log(`@ http://localhost:${port}`);
