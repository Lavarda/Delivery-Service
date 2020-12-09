const { Model, DataTypes } = require('sequelize')

class Coupons extends Model {
    static init(connection) {
        super.init({
            value: DataTypes.INTEGER,
            expire_date: DataTypes.DATE,
            code: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Users, {
            foreignKey: 'id_coupon',
            as: 'coupons_to_users',
            through: 'users_coupons'   
        })
    }
}

module.exports = Coupons;