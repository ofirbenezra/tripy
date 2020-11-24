const { Sequelize } = require('sequelize');
var env       = process.env.NODE_ENV || 'production';
var config    = require(__dirname + '/config/config.json')[env];

let sequelize;
const dbManager = {
    init() {
        sequelize = new Sequelize(config.database, config.username, config.password, {
            host: config.host, // '10.46.22.141',
            dialect: config.dialect //'postgres'
        });
    },

    async connect() {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
module.exports = { dbManager, sequelize};