const express = require('express')
var hbs = require('express-handlebars')
const app = express()
var Sqrl = require('squirrelly')
const path = require('path')
var bodyParser = require('body-parser')
var xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xmlHttp = new xmlHttpRequest()
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('landingPage.html', { root: '/Users/tpl619_6/Desktop/Project1/' })
})
// routes get loc
// get user
// get favorites.

// frontend
// get components folder, w/ api.js
// semantic UI react
// react router
// react component that is enter zipcode/display nearest/ favorites.
// call this get locations. separate files that calls this function.
// make a function, export it. file that intakes the location.
function Point (latitude, longitude) {
  this.latitude = latitude
  this.longitude = longitude
}
var a = new Point(37.780350, -122.415748)
var b = new Point(37.77245, -122.4119627)
var c = new Point(37.791592, -122.401624)
var d = new Point(37.789857, -122.393678)
var e = new Point(37.781201, -122.395061)
var f = new Point(37.791672, -122.408245)
var g = new Point(37.793948, -122.421296)
var h = new Point(37.752833, -122.414889)
var i = new Point(37.797557, -122.4012137)
var j = new Point(37.720799, -122.440835)
var k = new Point(37.757171, -122.433300)
var l = new Point(37.786426, -122.436999)
var m = new Point(37.744855, -122.485172)
var n = new Point(37.769051, -122.443835)
var o = new Point(37.780734, -122.460188)
var p = new Point(37.779126, -122.492541)
var q = new Point(37.759763, -122.485678)
var r = new Point(37.801760, -122.436962)
var s = new Point(37.732007, -122.387680)
var t = new Point(37.735633, -122.458665)
var u = new Point(37.797639, -122.463833)
var v = new Point(37.824631, -122.370545)
var w = new Point(37.745090, -122.437055)
var x = new Point(37.723525, -122.478909)
var y = new Point(37.800556, -122.408628)
var z = new Point(37.721553, -122.409631)
var zz = new Point(37.772451, -122.390792)

var myMap = new Map()
myMap.set(94102, a)
myMap.set(94103, b)
myMap.set(94104, c)
myMap.set(94105, d)
myMap.set(94107, e)
myMap.set(94108, f)
myMap.set(94109, g)
myMap.set(94110, h)
myMap.set(94111, i)
myMap.set(94112, j)
myMap.set(94114, k)
myMap.set(94115, l)
myMap.set(94116, m)
myMap.set(94117, n)
myMap.set(94118, o)
myMap.set(94121, p)
myMap.set(94122, q)
myMap.set(94123, r)
myMap.set(94124, s)
myMap.set(94127, t)
myMap.set(94129, u)
myMap.set(94130, v)
myMap.set(94131, w)
myMap.set(94132, x)
myMap.set(94133, y)
myMap.set(94134, z)
myMap.set(94158, zz)

function findLoc(num1){
  console.log(myMap.get(num1));
  return myMap.get(num1)
}

function calcDistanceBetween (lat1, lon1, lat2, lon2) { // or params can be point 1, point 2
  // Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
  var R = 3958 // Radius of the earth in km
  var dLat = (lat2 - lat1) * Math.PI / 180 // deg2rad below
  var dLon = (lon2 - lon1) * Math.PI / 180
  var a =
       0.5 - Math.cos(dLat) / 2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLon)) / 2

  return R * 2 * Math.asin(Math.sqrt(a))
}

function findArtwork (userInput, array) {
  let  resultArr = []
  let userCoordinates = findLoc(userInput); 
  for (let i = 0; i < array.length; i++) {
    const resultDistance = calcDistanceBetween(array[i].the_geom.coordinates[1], array[i].the_geom.coordinates[0], userCoordinates.latitude, userCoordinates.longitude)
    console.log(resultDistance)
    if (resultDistance < 0.5) {
      resultArr.push(array[i])
    }
  }

  console.log('THIS IS HOW LONGN THE ARRAY IS');
  console.log(resultArr.length)
  return resultArr
}

router.get('/list', (req, res) => {
  console.log('READY')
  console.log(req.query);
  console.log('TESTING ZIPCODE:')
  console.log(typeof req.query.zipcode);
  console.log(req.query.zipcode);
  var userInput = parseInt(req.query.zipcode);
  console.log('WHAT IS TYPE OF USERINPUT')
  console.log(typeof userInput);
  console.log('TESTING FINDLOC')
  console.log(findLoc(userInput));

  xmlHttp.open('GET', 'http://data.sfgov.org/resource/cf6e-9e4j.json', false) // false for synchronous request
  xmlHttp.setRequestHeader('X-App-Token', 'yMMJQvFA5uahUfUINwLu43YfK')
  xmlHttp.send(null)
  var Data = JSON.parse(xmlHttp.responseText)
  var filteredData = findArtwork(userInput, Data);

  // here is where the method will be implemented. it will input Data and the query.name. Manipulate that information and return a filtered Data.

  var HTMLFile = Sqrl.renderFile('./lists.html', filteredData)
  res.write(HTMLFile)
})

module.exports = router
