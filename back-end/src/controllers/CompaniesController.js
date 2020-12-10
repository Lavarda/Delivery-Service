const Yup = require('yup')
const fs = require("fs");
const path = require('path');
const { Op } = require('sequelize')

const CompaniesModel = require('../models/Companies')
const CompaniesView = require('../views/Companies')

const CategoriesModel = require('../models/Categories')
const ProductsModel = require('../models/Products')

module.exports = {
    async create(req,res) {
        const { name, stars , number_avaliations, description } = req.body
        const image = req.file

        const data = {
            name,
            stars: Number(stars),
            number_avaliations: Number(number_avaliations),
            description,
            image: fs.readFileSync(
                path.resolve(__dirname, '../', 'assets', 'images') + `/${image.filename}`
            ),
            filename: image.originalname,
        }

        const schema = Yup.object().shape({
            name: Yup.string().required('Please fill field name'),
            stars: Yup.string().required('Please fill field stars'),
            number_avaliations: Yup.string().required('Please fill field number of avaliations'),
            description: Yup.string().required('Please fill field description'),
        })
        
        try {
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            return res.status(422).json({
                status: 422,
                message: 'Error to create Company, please fill all fields',
                errors: err.erros,
                value: {},
            })
        }
        
        if ( !image ) {
            return res.status(422).json({
                status: 422,
                message: 'Error to create Company, please upload an image',
                errors: err.erros,
                value: {},
            })
        } 

        const company = await CompaniesModel.create(data)
        
        if ( !company ) {
            return res.status(400).json({ 
                status: 400,
                message: 'Error to create Company ',
                value: {},
            })
        } else {
            return res.status(201).json({ 
                status: 201,
                message: 'Company created successfully ',
                value: CompaniesView.render(company)
            })
        }
    },

    async list(req, res) {
        const companies = await CompaniesModel.findAll({
            where: {
                is_deleted: {
                    [Op.eq]: false,
                }
            },
            include: [
                {
                    model: CategoriesModel,
                    as: 'company_category'
                },
                {
                    model: ProductsModel, 
                    as: 'company_products'
                },
            ]
        })

        if ( companies ) {
            return res.status(200).json({
                status: 200,
                message: 'Companies searched successfully',
                value: CompaniesView.renderMany(companies),
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Companies not found',
                value: {}
            })
        }

    },
    
    async listDeactivate(req, res) {

    },

    async edit(req, res) {

    },

    async deactivate(req,res) {

    },

    async activate(req,res) {

    },
}