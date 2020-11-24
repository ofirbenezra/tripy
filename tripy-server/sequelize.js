const Sequelize = require('sequelize')
const UserModel = require('./models/users')
var env       = process.env.NODE_ENV || 'production';
var config    = require(__dirname + '/config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host, // '10.46.22.141',
    dialect: config.dialect, //'postgres'
    define: {
        timestamps: false
    }
});

const User = UserModel(sequelize, Sequelize)

async function connect() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



module.exports = {
    User
}