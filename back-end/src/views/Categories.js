module.exports = {
    render (categories) {
        return {
            id: categories.id,
            name: categories.name,
            image: categories.filename, 
        }
    },

    renderMany(categories) {
        return categories.map(categories => this.render(categories))
    },
}