const { Model, DataTypes } = require('sequelize')

class UsersOrders extends Model {
    static init(connection) {
        super.init({
            total_value: DataTypes.INTEGER,
            cod_order: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) { 
        this.belongsToMany(models.Coupons, {
            foreignKey: 'id_user_orders',
            as: 'users_orders_coupons',
            through: 'users_coupons',
        })
    }
}

module.exports = UsersOrders;