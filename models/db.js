const Sequelize = require('sequelize');
const connection = new Sequelize('projeto_moms', 'root', '####', {
    host: 'localhost',
    dialect: 'mysql'
});

connection.authenticate().then(function() {
    console.log('Conexão bem sucedida')
}).catch(function(err) {
    console.log('Erro conexão não foi bem sucedida: (' + err + ')')
})
module.exports = connection;