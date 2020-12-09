const express = require('express')
const routes = express.Router();

const AdressesController = require('../controllers/AdressesController')

routes.post('/adresses/:id_user/create', AdressesController.create )

module.exports = routes