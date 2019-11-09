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