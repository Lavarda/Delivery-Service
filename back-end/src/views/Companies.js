module.exports = {
    render (company) {
        return {
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
}