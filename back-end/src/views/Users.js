const AdressesView = require('../views/Adresses')

module.exports = {
    render (user) {

        console.log(user.email)

        let user_view = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
        }

        if ( user.is_deleted ) {
            user.is_deleted = user.is_deleted
        }

        return user_view
    },

    renderMany(user) {
        return user.map(user => this.render(user))
    },

    renderUserAdresses(user) {

        let user_view = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
            adresses: AdressesView.renderManyAdressesOnUser(user.adresses_user),
        }

        if ( user.is_deleted ) {
            user.is_deleted = user.is_deleted
        }

        return user_view
    },

    renderManyUsersAdresses(user) {
        return user.map(user => this.renderUserAdresses(user))
    }
}