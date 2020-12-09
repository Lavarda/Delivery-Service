const Yup =  require('yup')

const UserModel = require('../models/Users')

const UserView = require('../views/Users')
const AdressesView = require('../views/Adresses')

module.exports = { 
    async create(req, res) {
        const  { 
            name,
            email,
            password,
            phone,
        } = req.body

        const data = {
            name,
            email,
            password,
            phone
        }

        const schema = Yup.object().shape({
            name: Yup.string().required('Please fill field name'),
            email: Yup.string().required('Please fill field email'),
            password: Yup.string().required('Please fill field password'),
            phone: Yup.string().required('Please fill field phone'),
        })

        try { 
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            return res.status(422).json({
                status: 422,
                message: "Error to create user, fill all fields",
                errors: err.errors,
                value: {}
            })
        }

        const user = await UserModel.create(data)

        if ( !user ) {
            return res.status(400).json({ 
                status: 400,
                message: 'Error to create user ',
                value: {},
            })
        } else {
            return res.status(201).json({ 
                status: 201,
                message: 'User created successfully ',
                value: UserView.render(user)
            })
        }
        
    },

    async list (req,res) {
        const users = await UserModel.findAll({
            include: { 
                association : 'adresses_user'
            }
        });

        if ( users ) {
            return res.status(200).json({
                status: 200,
                message: 'Users searched successfully',
                value: UserView.renderManyUsersAdresses(users)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Users not found',
                value: {}
            })
        }
    },

    async delete(req, res) {
        const { id } = req.params;

        const user = await UserModel.findByPk(id)

        if ( user ) {
            user.destroy({
                truncate: true
            });

            return res.status(200).json({
                status: 200,
                message: 'User deleted successfully',
                value: UserView.render(user)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'User not found',
                value: {},
            })
        }
    }
}