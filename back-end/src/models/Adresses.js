const { Model, DataTypes } = require('sequelize')

class Adresses extends Model {
    static init(connection) {
        super.init({
            cep: DataTypes.STRING,
            city: DataTypes.STRING,
            neighborhood: DataTypes.STRING,
            state: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'id_user',
            as: 'adresses_user',
        })
    }
}

module.exports = Adresses;