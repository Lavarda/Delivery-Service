const { Op, Sequelize, QueryTypes } = require("sequelize");
const Yup =  require('yup')

const UserModel = require('../models/Users')

const UserView = require('../views/Users')

const databaseConfig = require('../database/config/config')
const connection = new Sequelize(databaseConfig);

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
            where: {
                is_deleted: {
                    [Op.eq]: false,
                },
            },
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

    async listUsersDeleted(req,res) {
        const users = await UserModel.findAll({
            where: {
                [Op.or]: {
                    is_deleted: {
                        [Op.eq]: true,
                    },
                }
            },
            include: {
                association: 'adresses_user'
            },
        })

        if ( users ) {
            return res.status(200).json({
                status: 200,
                message: 'Users deleted searched successfully',
                value: UserView.renderManyUsersAdresses(users)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'Users deleted not found',
                value: {}
            })
        }
    },

    async edit(req, res) {
        const { id } = req.params

        const { name, email, phone } = req.body

        const user = await UserModel.findByPk(id)

        if ( user ) {
            user.name = name != "" ? name : user.name
            user.email = email != "" ? email : user.email
            user.phone = phone != "" ? phone : user.phone

            await user.save()

            return res.status(200).json({
                status: 200,
                message: 'User edited successfully',
                value : UserView.render(user),
            })
        } else {
            return res.status(204).json({ 
                status: 204,
                message: 'User not found',
                value: {},
            })
        }

    },

    async deactivate(req, res) {
        const { id } = req.params;

        const user = await UserModel.findByPk(id)

        await connection.query(`UPDATE users SET is_deleted = true WHERE id = ${id};`, { type: QueryTypes.UPDATE });

        if ( user ) {
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
    },

    async activate(req, res) {
        const { id } = req.params;

        const user = await UserModel.findByPk(id)

        await connection.query(`UPDATE users SET is_deleted = false WHERE id = ${id};`, { type: QueryTypes.UPDATE });

        if ( user ) {
            return res.status(200).json({
                status: 200,
                message: 'User activated successfully',
                value: UserView.render(user)
            })
        } else {
            return res.status(204).json({
                status: 204,
                message: 'User not found',
                value: {},
            })
        }
    },

}