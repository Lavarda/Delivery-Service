const path = require('path')
const fs = require('fs')
const { Op, Sequelize, QueryTypes } = require('sequelize')

const CategoriesModel = require('../models/Categories')
const CategoriesView = require('../views/Categories')

const databaseConfig = require('../database/config/config')
const connection = new Sequelize(databaseConfig);

module.exports = {
    async create(req,res) {
        const { id_company } = req.params;
        const { name } = req.body
        const image = req.file

        if ( name != '' && image.filename ) {
            const data = {  
                id_company,
                name,
                image: fs.readFileSync(
                    path.resolve(__dirname, '../', 'assets', 'images') + `/${image.filename}`
                ),
                filename: image.originalname,
            }

            const category = await CategoriesModel.create(data)

            if ( category ) {
                return res.status(201).json({
                    status: 201,
                    message: 'Category created successfully',
                    value: CategoriesView.render(category)
                })
            } else {
                return res.status(400).json({
                    status: 400,
                    message: 'Error to create a category',
                    value: {},
                })
            }
        } else {
            return res.status(422).json({
                status: 422,
                message: 'Error to create category',
                errors: [
                    "Please fill all fields, name and image.",
                ],
                value: CategoriesView.render(category)
            })
        }
    },

    async list(req, res) {

    },

    async listDeactivated(req, res) {

    },

    // Listar as companias de uma categoria
    async listCompaniesOfCategory(req, res) {

    },

    async desactivate(req, res) {

    },

    async activate(req, res) {

    },
}