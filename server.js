// require('dotenv').config();
const express = require('express')
var hbs = require('express-handlebars');
const app = express();
var Sqrl = require('squirrelly');
let path = require('path');
var bodyParser = require('body-parser');
//var multer = require('multer');

var xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = new xmlHttpRequest();

//var source = document.getElementById("the-tpl").innerHTML;
//var template = Handlebars.compile(source);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(multer());

// setting port
app.set('port', process.env.PORT || 5000)
//get request to render landing page
app.get('/', (req, res) => {
  res.sendFile('screen2.html', { root: '/Users/tpl619_6/Desktop/Project1/' })
  })

//data processing route;
app.get('/list', (req, res) => {
  console.log("ready");
  console.log(req.query.name);
  xmlHttp.open( "GET", "http://data.sfgov.org/resource/cf6e-9e4j.json", false ); // false for synchronous request
  xmlHttp.setRequestHeader('X-App-Token', 'yMMJQvFA5uahUfUINwLu43YfK');
  xmlHttp.send( null );
  var Data = JSON.parse(xmlHttp.responseText);
  var HTMLFile = Sqrl.renderFile(path.join(__dirname, 'lists.html'), Data)
  res.write(HTMLFile);
})

let numZip = req.query.name
function findLoc(numZip){
  for (let i = 0; i )
}

//get request to make API call and render that JSON data. 
//app.get('/list', (req, res) => {
  // console.log(req.body)
  // xmlHttp.open( "GET", "http://data.sfgov.org/resource/cf6e-9e4j.json", false ); // false for synchronous request
  // xmlHttp.setRequestHeader('X-App-Token', 'yMMJQvFA5uahUfUINwLu43YfK');
  // xmlHttp.send( null );
  // console.log("ready");
  // var Data = JSON.parse(xmlHttp.responseText);
  //console.log(Data);
  // make Data a list of objects with prsoperties name, artist, location
  // update html file with proper property names
  //res.sendFile('lists.html', { root: '/Users/tpl619_6/Desktop/Project1/' });
  // var HTMLFile = Sqrl.renderFile(path.join(__dirname, 'lists.html'), Data)
  // res.write(HTMLFile);
//});

//method. input should be zipcode. output should be top five results from Data. take the zipcode, find the long/lat of the zipcode.  
//takes in zipcode and converts that to long/lat. 

//takes the long/lat from prev method and converts that to a zipcode i've hardcoded. 

//take that zipcode, search thru list of zipcodes, then return the artwork tht i've assigned to that zipcode.  and return top results in mile radius. 



//listening at port
app.listen(app.get('port'), () => console.log(`My server is running ${app.get('port')}...`));

