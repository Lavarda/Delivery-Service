const { Model, DataTypes } = require('sequelize')

class Coupon extends Model {
    static init(connection) {
        super.init({
            value: DataTypes.INTEGER,
            expire_date: DataTypes.DATE,
            code: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }
}

module.exports = Coupon;