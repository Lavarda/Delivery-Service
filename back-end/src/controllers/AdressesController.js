const Yup = require('yup')

const AdressesModel = require('../models/Adresses')
const AdressesView = require('../views/Adresses')

module.exports = {
    async create(req,res) {
        const { id_user } = req.params
        const { cep, city, neighborhood, state, number } = req.body

        const data = {
            cep,
            city,
            neighborhood,
            state,
            number
        }

        const schema = Yup.object().shape({
            cep: Yup.string().required('Please fill field cep'),
            city: Yup.string().required('Please fill field city'),
            neighborhood: Yup.string().required('Please fill field neighborhood'),
            state: Yup.string().required('Please fill field state'),
            number: Yup.number().required('Please fill field number')
        })

        try { 
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            return res.status(422).json({
                status: 422,
                message: "Error to create adress, fill all fields",
                errors: err.errors,
                value: {}
            })
        }

        const adresses = await AdressesModel.create({ id_user, ...data})

        if ( !adresses ) {
            return res.status(400).json({ 
                status: 400,
                message: 'Error to create adresses ',
                value: {},
            })
        } else {
            return res.status(201).json({ 
                status: 201,
                message: 'Adresses created successfully ',
                value: AdressesView.render(adresses)
            })
        }
    },

    async edit(req, res) {
        const { id } = req.params

        const { cep, city, neighborhood, state, number } = req.body

        const adresses = await AdressesModel.findByPk(id)

        if ( adresses ) {
            adresses.cep = cep != "" ? cep : adresses.cep
            adresses.city = city != "" ? city : adresses.city
            adresses.neighborhood = neighborhood != "" ? neighborhood : adresses.neighborhood
            adresses.state = state != "" ? state : adresses.state
            adresses.number = number != "" ? number : adresses.number

            await adresses.save() 

            return res.status(200).json({
                status: 200,
                message: 'Adress edited successfully',
                value: AdressesView.render(adresses)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Adresses not found',
                value: {},
            })
        }
    },

    async delete(req, res) {
        const { id } = req.params

        const adresses = await AdressesModel.findByPk(id)
        
        if ( adresses ) {
            await adresses.destroy()

            return res.status(200).json({
                status: 200,
                message: 'Adresses deleted successfully',
                value: AdressesView.render(adresses)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Adresses not found',
                value: {},
            })
        }
    },
}