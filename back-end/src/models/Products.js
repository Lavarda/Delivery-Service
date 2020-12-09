const { Model, DataTypes } = require('sequelize')

class Products extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            value_unit: DataTypes.INTEGER,
            comment: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.Orders, {
            foreignKey: 'id_product',
            as: 'product_orders',
        })

        this.belongsTo(models.Companies, {
            foreignKey: 'id_company',
            as: 'product_company',
        })
    }
}

module.exports = Products;