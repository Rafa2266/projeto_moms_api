const Sequelize = require('sequelize');
const db = require("./db")

const User = db.define('usuario', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        CPF: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Data_nascimento: {
            type: Sequelize.STRING,
            allowNull: false
        },

    })
   /*  User.sync({ alter: true }) */
module.exports = User;