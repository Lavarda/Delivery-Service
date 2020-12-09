const express = require('express')
const routes = express.Router();

const UserController = require('../controllers/UserController')

routes.post('/users/create', UserController.create )

routes.get('/users/list', UserController.list )

module.exports = routes