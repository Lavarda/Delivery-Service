const { Model, DataTypes } = require('sequelize')

class Orders extends Model {
    static init(connection) {
        super.init({
            amount: DataTypes.INTEGER,
            date_order: DataTypes.DATE,
            status: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Products, {
            foreignKey: 'id_product',
            as: 'orders_product'
        })

        this.belongsToMany(models.Users, {
            foreignKey: 'id_order',
            as: 'orders_user',
            through: 'order_object'
        })
    }
}

module.exports = Orders;