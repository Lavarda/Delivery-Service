const { Model, DataTypes } = require('sequelize')

class Category extends Model {
    static init(connection) {
        super.init({
            start: DataTypes.INTEGER,
            number_avaliations: DataTypes.INTEGER,
            description: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsToMany(models.Company, {
            foreignKey: 'id_company',
            as: 'category_company',
            through: 'companies_categories',
        })
    }
}

module.exports = Category;