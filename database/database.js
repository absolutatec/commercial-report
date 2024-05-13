const Sequelize = require('sequelize');
const connection = new Sequelize('uppchannel_plus', 'sammy', 'Absoluta@98m', {
    host: '134.209.162.237',
    dialect: 'mysql',
    timezone: "-03:00"
})
module.exports = connection;