const AdressesView = require('../views/Adresses')

module.exports = {
    render (user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
        }
    },

    renderMany(user) {
        return user.map(user => this.render(user))
    },

    renderUserAdresses(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            adresses: AdressesView.renderManyAdressesOnUser(user.adresses_user),
        }
    },

    renderManyUsersAdresses(user) {
        return user.map(user => this.renderUserAdresses(user))
    }
}