// require('dotenv').config();
const express = require('express')
var hbs = require('express-handlebars')
const app = express()
var Sqrl = require('squirrelly')
const path = require('path')
var bodyParser = require('body-parser')
var xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xmlHttp = new xmlHttpRequest()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// setting port
app.set('port', process.env.PORT || 5000)
// get request to render landing page

app.use('/', require('./routes/api'))

// listening at port
app.listen(app.get('port'), () => console.log(`My server is running ${app.get('port')}...`))
