const express = require('express')
const routes = express.Router();

const CompaniesController = require('../controllers/CompaniesController')
const { uploadFile } = require('../middleware/UploadImage');

routes.post('/companies/create', uploadFile.single("image"), CompaniesController.create )

routes.post('/companies/delete/:id', CompaniesController.deactivate )
routes.post('/companies/activate/:id', CompaniesController.activate)

routes.get('/companies/all', CompaniesController.list )
routes.get('/companies/deactivated', CompaniesController.listDeactivated)

module.exports = routes