const { Model, DataTypes } = require('sequelize')

class OrderObject extends Model {
    static init(connection) {
        super.init({
            total_value: DataTypes.INTEGER,
            cod_order: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = OrderObject;