const express = require('express');
var hbs = require('express-handlebars')
const app = express()
var Sqrl = require('squirrelly')
const path = require('path')
var bodyParser = require('body-parser')
var xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xmlHttp = new xmlHttpRequest()
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('landingPage.html', { root: '/Users/tpl619_6/Desktop/Project1/' })
  })
//routes get loc
//get user
//get favorites. 

//frontend
//get components folder, w/ api.js 
//semantic UI react 
//react router
//react component that is enter zipcode/display nearest/ favorites. 
//call this get locations. separate files that calls this function. 
//make a function, export it. file that intakes the location. 
router.get('/list', (req, res) => {
    console.log('ready')
    console.log(req.query.name)
    //var point1 = findLoc(req.query.name)
  
    xmlHttp.open('GET', 'http://data.sfgov.org/resource/cf6e-9e4j.json', false) // false for synchronous request
    xmlHttp.setRequestHeader('X-App-Token', 'yMMJQvFA5uahUfUINwLu43YfK')
    xmlHttp.send(null)
    var Data = JSON.parse(xmlHttp.responseText)
    console.log(Data[0]);

  // here is where the method will be implemented. it will input Data and the query.name. Manipulate that information and return a filtered Data.
  //iterateTheDistance()

  //returns indices of artwork that are less than two miles away. store this in a variable. 
  var HTMLFile = Sqrl.renderFile('./lists.html', Data)
  res.write(HTMLFile)
})

module.exports = router;
