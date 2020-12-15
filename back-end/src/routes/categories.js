const express = require('express');
const routes = express.Router();

const CategoriesController = require('../controllers/CategoriesController');
const { uploadFile } = require('../middleware/UploadImage');

routes.post('/categories/create/:id_company', uploadFile.single("image"), CategoriesController.create )

module.exports = routes