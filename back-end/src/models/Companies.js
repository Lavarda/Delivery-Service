const { Model, DataTypes } = require('sequelize')

class Companies extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            stars: DataTypes.INTEGER,
            number_avaliations: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
            filename: DataTypes.STRING,
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.hasMany(models.Categories, {
            foreignKey: 'id_company',
            as: 'company_category',
        })

        this.hasMany(models.Products, {
            foreignKey: 'id_company',
            as: 'company_products',
        })
    }
}

module.exports = Companies;