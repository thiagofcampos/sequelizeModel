module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: type.STRING,
            allowNull: false
        },
        cpf: {
            type: type.INTEGER,
            allowNull: false
        },
        dataNascimento: {
            type: type.DATE
        },
        cidadeNascimento: {
            type: type.STRING
        },
        corFavorita: {
            type: type.STRING
        },
        endereco: {
            type: type.STRING
        },
        sexo: {
            type: type.BOOLEAN
        }
    })
}
