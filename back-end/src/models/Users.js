const { Model, DataTypes } = require('sequelize')

class Users extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.Adresses, {
            foreignKey: 'id_user',
            as: 'user_adresses',
        })

        this.belongsToMany(models.Orders, {
            foreignKey: 'id_user',
            as: 'user_orders',
            through: 'order_object',
        })

        this.hasMany(models.Payments, {
            foreignKey: 'id_user',
            as: 'user_payments'
        })
    }
}

module.exports = Users;