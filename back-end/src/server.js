const express = require('express');
// const routes = require('./routes');
const bodyParser = require('body-parser')

const routesUser = require('./routes/users')
const routesAdresses = require('./routes/adresses')

require('./database/connection')
require('events').EventEmitter.defaultMaxListeners = 5000;

const PORT = 3333
const HOST = '0.0.0.0'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routesUser)
app.use(routesAdresses)

app.listen(PORT, HOST)