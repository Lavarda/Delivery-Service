const express = require('express');
const bodyParser = require('body-parser')

const routesUser = require('./routes/users')
const routesAdresses = require('./routes/adresses')
const routesCompanies = require('./routes/companies')

require('./database/connection')
require('events').EventEmitter.defaultMaxListeners = 5000;

const PORT = 3333
const HOST = '0.0.0.0'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routesUser)
app.use(routesAdresses)
app.use(routesCompanies)

app.listen(PORT, HOST)