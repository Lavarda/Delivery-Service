const CategoriesView = require('./Categories')

module.exports = {
    render (company) {
        return {
            id: company.id,
            name: company.name,
            stars: company.stars,
            number_avaliations: company.number_avaliations,
            description: company.description,
            image: company.filename, 
        }
    },

    renderMany(company) {
        return company.map(company => this.render(company))
    },

    renderProducts(products) {
        return {
            id: procuts.id,
            name: products.name,
        }
    },

    renderManyProducts(products) {
        return products.map( products => this.renderProducts(products) )
    },

    renderAssociations(company) {
        return {
            id: company.id,
            name: company.name,
            stars: company.stars,
            number_avaliations: company.number_avaliations,
            description: company.description,
            image: company.filename, 
            company_categories: CategoriesView.renderMany(company.company_category),
            company_products: this.renderManyProducts(company.company_products)
        }
    },

    renderManyAssociations(company) {
        return company.map( company => this.renderAssociations(company) )
    },
}