const { Model, DataTypes } = require('sequelize')

class Users extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.Adresses, {
            foreignKey: 'id_user',
            as: 'adresses_user',
        })

        this.belongsToMany(models.Orders, {
            foreignKey: 'id_user',
            as: 'user_orders',
            through: 'users_orders',
        })

        this.hasMany(models.Payments, {
            foreignKey: 'id_user',
            as: 'user_payments'
        })

        this.belongsToMany(models.Coupons, {
            foreignKey: 'id_user',
            as: 'user_coupon',
            through: 'users_coupons',   
        })
    }
}

module.exports = Users;