const { Model, DataTypes } = require('sequelize')

class Payments extends Model {
    static init(connection) {
        super.init({
            number_card: DataTypes.INTEGER,
            cvv_card: DataTypes.INTEGER,
            expire_date: DataTypes.DATE,
            name_holder: DataTypes.STRING,
            cpf_cnpj_holder: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'id_user',
            as: 'payments_user'
        })
    }
}

module.exports = Payments;