const express = require('express')
const routes = express.Router();

const AdressesController = require('../controllers/AdressesController')

routes.post('/adresses/create/:id_user', AdressesController.create)
routes.post('/adresses/edit/:id', AdressesController.edit)

routes.delete('/adresses/delete/:id', AdressesController.delete)

module.exports = routes