const express = require('express');
const app = express();
const db = require('./models/db')
const Sequelize = require('sequelize');
const User = require('./models/User')

app.use(express.json());

app.post("/create_user", async(req, res) => {
    const User = require('./models/User')
    await User.create(req.body).then((response) => {
        res.send(req.body)
    }).catch((err) => {
        res.status(500)
    })
})

app.get("/list_users", async(req, res) => {
    const User = require('./models/User')
    await User.findAll({
        attributes: ['id', 'Nome', 'CPF', 'Data_nascimento'],

    }).then((response) => {
        res.send(response)
    }).catch((err) => {
        res.status(500)
    })

})


app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})