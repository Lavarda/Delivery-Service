module.exports = {
    render (user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
        }
    },

    renderMany(user) {
        return user.map(user => this.render(user))
    },
}