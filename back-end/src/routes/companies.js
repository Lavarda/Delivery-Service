const express = require('express')
const routes = express.Router();

const CompaniesController = require('../controllers/CompaniesController')
const { uploadFile } = require('../middleware/UploadImage');

routes.post('/companies/create', uploadFile.single("image"), CompaniesController.create )

routes.get('/companies/all', CompaniesController.list )

module.exports = routes