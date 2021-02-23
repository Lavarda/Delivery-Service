const express = require('express')
const routes = express.Router();

const UserController = require('../controllers/UserController')

routes.post('/users/create', UserController.create )

routes.get('/users/list', UserController.list )
routes.get('/users/deleted', UserController.listUsersDeleted)

routes.post('/users/edit/:id', UserController.edit)

routes.delete('/users/delete/:id', UserController.deactivate)
routes.post('/users/activate/:id', UserController.activate)

module.exports = routes