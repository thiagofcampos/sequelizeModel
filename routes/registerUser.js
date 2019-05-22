const User = require('../sequelize');

module.exports = (app) => {
    app.post('/registerUser', (req, res) => {
        const data = {
            nome: req.body.nome,
            cpf: req.body.cpf,
            dataNascimento: req.body.dataNascimento,
            cidadeNascimento: req.body.cidadeNascimento,
            corFavorita: req.body.corFavorita,
            endereco: req.body.endereco,
            sexo: req.body.sexo,
        };
        User.create({
            nome: data.nome,
            cpf: data.cpf,
            dataNascimento: data.dataNascimento,
            cidadeNascimento: data.cidadeNascimento,
            corFavorita: data.corFavorita,
            endereco: data.endereco,
            sexo: data.sexo,
        })
            .then(() => {
                console.log('created user');
                res.json('user created');
            })
            .catch(err => {
                console.log('falha de comunicação com banco de dados');
                res.status(500).json(err);
            })
    })
}
