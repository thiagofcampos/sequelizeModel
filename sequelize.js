const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize('kidding', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log(`Users db and table was created`)
    });

module.exports = User;
