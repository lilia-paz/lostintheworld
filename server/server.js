// require('dotenv').config();
const express = require('express')
var hbs = require('express-handlebars')
const app = express()
var Sqrl = require('squirrelly')
const path = require('path')
var bodyParser = require('body-parser')
var xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xmlHttp = new xmlHttpRequest()

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'tpl619_6',
//   host: 'localhost',
//   database: 'project1',
//   password: 'lpaz',
//   port: 5432
// })

function createFavorite () {
  const places_id = '66 9th'
  console.log(places_id)
  const user_id = 456
  pool.query('INSERT INTO favorites (places_id, user_id) VALUES ($1, $2)', [places_id, user_id], (error, results) => {
    if (error) {
      throw error
    }
    console.log(`User saved ID: ${results.insertId}`)
  })
}
// document.
// document.getElementById("myBtn").addEventListener("click", createFavorite);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// setting port
app.set('port', process.env.PORT || 5000)
// get request to render landing page

app.use('/', require('./routes/api'))

// listening at port
app.listen(app.get('port'), () => console.log(`My server is running ${app.get('port')}...`))
