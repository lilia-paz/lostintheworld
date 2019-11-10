import { BADSTR } from "dns"

$.ajax({
  url: 'https://data.sfgov.org/resource/cf6e-9e4j.json',
  type: 'GET',
  data: {
    $limit: 5000,
    $$app_token: 'YOURAPPTOKENHERE'
  }
}).done(function (data) {
  alert('Retrieved ' + data.length + ' records from the dataset!')
  console.log(data)
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

function findLoc(zipNum){
    return myMap.get(zipNum)
}
//i get a point and pass to function below: (point1)
function calcDistanceBetween(lat1, lon1, lat2, lon2) {//or params can be point 1, point 2
  //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
  var R = 3958; // Radius of the earth in km
  var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = 
     0.5 - Math.cos(dLat)/2 + 
     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
     (1 - Math.cos(dLon))/2;

  return R * 2 * Math.asin(Math.sqrt(a));
}
// let lat1;
// let lat2;
// let lon1;
// let lon2;
// var R = 3958.8; // miles
// var alpha = lat1.toRadians();
// var beta = lat2.toRadians();
// var omega = (lat2-lat1).toRadians();
// var tau = (lon2-lon1).toRadians();

// var a = Math.sin(omega/2) * Math.sin(omega/2) +
//         Math.cos(alpha) * Math.cos(beta) *
//         Math.sin(tau/2) * Math.sin(tau/2);
// var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

// var d = R * c;


// every data point in the object.point should be iterated thru the formula. this distance should then be stored in an array.
// Everything that is returned from here needs to be stored in an array.
// this should be returned in miles.
// var d = R * c;
// need an array of the 65 artworks.
// for loop that will iterate thru the haversine array.
//   declare an empty variable to store results.
//   if a distance is greater than 2, take the result and store in a variable.
//   finish loop
//   return the indices of the artworks [different array]


// // FUNCTIONS 
// const zipNum = req.query.name
// function findLoc (zipNum) {
//   return myMap.get(zipNum)
// }

// function calcDistanceBetween (lat1, lon1, lat2, lon2) {
//   var R = 3958 // Radius of the earth in km
//   var dLat = (lat2 - lat1) * Math.PI / 180 // deg2rad below
//   var dLon = (lon2 - lon1) * Math.PI / 180
//   var a =
//      0.5 - Math.cos(dLat) / 2 +
//      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//      (1 - Math.cos(dLon)) / 2

//   return R * 2 * Math.asin(Math.sqrt(a))
// }

// function iterateTheDistance () {
//   var distanceBetweenPoints = calcDistanceBetween(); 
//   var distanceBetweenUserAndFirst = calcDistanceBetween(point1.latitude, point1.longitude, Data[0].the_geom.coordinates[0], Data[0].the_geom.coordinates[1])

//   for (let i = 0; i < 65; i++) {

//     let  distancesCalculated = calcDistanceBetween(point1.latitude, point1.longitude, Data[i].the_geom.coordinates[0], Data[0].the_geom.coordinates[1])
//     distancesCalculated.push()
//   } //if it's less than two, store that in a variable,

// // return those indices. 
// }
  // point1.latitude 
  // point1.longitude
  // calcDistanceBetween(point1.latitude, point1.longitude,  )
  // var distanceBetweenPoints = calcDistanceBetween(); 
  // var distanceBetweenUserAndFirst = calcDistanceBetween(point1.latitude, point1.longitude, Data[0].the_geom.coordinates[0], Data[0].the_geom.coordinates[1])


  function findFive(array){
    let emptyArr = [];
    for (let i = 0; i < array.length, i++){
      if (array[i] < 5){
        emptyArr.push(array[i]);
      }
    }
    return emptyArr; 
  }
  function findKinder(array){
    let emptyArr = [];
    for (let i = 0; i < array.length; i ++){

      if (array[i].age < 5){
        emptyArr.push(array[i]);
      }
    }
    return emptyArr; 
  }

let userCoordinates = function findLoc(zipNum){
    return myMap.get(zipNum)
}

function calcDistanceBetween(lat1, lon1, lat2, lon2) {//or params can be point 1, point 2
    //Radius of the earth in:  1.609344 miles,  6371 km  | var R = (6371 / 1.609344);
    var R = 3958; // Radius of the earth in km
    var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = 
       0.5 - Math.cos(dLat)/2 + 
       Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
       (1 - Math.cos(dLon))/2;
  
    return R * 2 * Math.asin(Math.sqrt(a));

function findArtwork(userZip, array){
  let resultArr = [];
  let userCoordinates = function findLoc(userZip){
    return myMap.get(userZip)
  }
  for (let i = 0; i < array.length; i++){
    let resultDistance = function calcDistanceBetween(array[i].the_geom.coordinates[0], array[i].the_geom.coordinates[1], userCoordinates);
    if (resultDistance < 2){
      resultArr.push(array[i])
      }
    }
    return resultArr;
  }