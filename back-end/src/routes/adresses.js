const express = require('express')
const routes = express.Router();

routes.get('/adresses/teste', (req,res) => {
    console.log('Ok')

    return res.status(200).json({ message: 'Ok'})
})

module.exports = routes