module.exports = {
    render (adresses) {
        return {
            id_adresses: adresses.id,
            cep: adresses.cep,
            city:  adresses.city,
            neighborhood:  adresses.neighborhood,
            state: adresses.state,
            number: adresses.number
        }
    },

    renderMany(adresses) {
        return adresses.map(adresses => this.render(adresses))
    },

    renderAdressesOnUser(adresses) {
        return {
            id_adresses: adresses.id,
            cep: adresses.cep,
            city:  adresses.city,
            neighborhood:  adresses.neighborhood,
            state: adresses.state,
            number: adresses.number
        }
    },

    renderManyAdressesOnUser(adresses) {
        return adresses.map(adresses => this.renderAdressesOnUser(adresses))
    }
}