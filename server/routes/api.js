const express = require('express')
const path = require('path')
var XmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
var xmlHttp = new XmlHttpRequest()
const router = express.Router()

const users = require('../models/users')
const artworks = require('../models/artworks')

router.get('/', (req, res) => {
  const root = path.join(__dirname, '..')
  res.sendFile('landingPage.html', { root: root })
})
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

function findLoc (num1) {
  return myMap.get(num1)
}

function calcDistanceBetween (lat1, lon1, lat2, lon2) {
  var R = 3958.08
  var dLat = (lat2 - lat1) * Math.PI / 180 // deg2rad below
  var dLon = (lon2 - lon1) * Math.PI / 180
  var a =
       0.5 - Math.cos(dLat) / 2 +
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
       (1 - Math.cos(dLon)) / 2

  return R * 2 * Math.asin(Math.sqrt(a))
}

function findArtwork (userInput, array) {
  const resultArr = []
  const userCoordinates = findLoc(userInput)
  for (let i = 0; i < array.length; i++) {
    const resultDistance = calcDistanceBetween(array[i].the_geom.coordinates[1], array[i].the_geom.coordinates[0], userCoordinates.latitude, userCoordinates.longitude)
    if (resultDistance < 0.5) {
      resultArr.push(array[i])
    }
  }
  return resultArr
}

router.post('/favorites', async (req, res) => {
  const { email, sub } = req.body
  const userFound = await users.findOne({ email, sub })
  const artworkIds = userFound.artworks
  const favoriteArtworks = []
  for (var i = 0; i < artworkIds.length; i++) {
    const artWork = await artworks.findOne({ _id: artworkIds[i] }) 
    favoriteArtworks.push(artWork)
  }
  res.json(favoriteArtworks)
})

router.get('/list', (req, res) => {
  var userInput = parseInt(req.query.zipcode)
  console.log('userInput:', userInput)

  xmlHttp.open('GET', 'http://data.sfgov.org/resource/cf6e-9e4j.json', false) // false for synchronous request
  xmlHttp.send(null)
  var Data = JSON.parse(xmlHttp.responseText)
  var filteredData = findArtwork(userInput, Data)
  res.json({ filteredData })
})

router.post('/user', async (req, res) => {
  const { email, sub } = req.body
  // check if the user has already been saved in the database
  let user = await users.findOne({ email, sub }).populate('artworks').exec()
  // if the user does not exist in the database, save the new user
  if (!user || !user.email || !user.sub) {
    const newUser = new users({ email, sub })
    user = await newUser.save({})
  }
  console.log('user:', user)
  res.json(user)
})

router.post('/favorite', async (req, res) => {
  const {
    email,
    sub,
    name,
    title,
    type,
    location
  } = req.body
  const userFound = await users.findOne({ email, sub })
  const newFavorite = new artworks({ name, title, type, location, user: userFound })
  const savedFavorite = await newFavorite.save({})
  const userArtworks = userFound.artworks
  userArtworks.push(newFavorite)
  userFound.save({})
  res.json(savedFavorite)
})

module.exports = router
