// require('dotenv').config();
const express = require('express')
var hbs = require('express-handlebars');
const app = express();
const Handlebars = require('Handlebars');
//const jsdom = require('jsdom');
app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var xmlHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xmlHttp = new xmlHttpRequest();

//var source = document.getElementById("the-tpl").innerHTML;
//var template = Handlebars.compile(source);

// setting port
app.set('port', process.env.PORT || 5000)

app.get('/', (req, res) => {
    console.log('HOME ERROR');
  res.sendFile('screen2.html', { root: '/Users/tpl619_6/Desktop/Project1/' })
  })

app.get('/list', (req, res) => {
  xmlHttp.open( "GET", "http://data.sfgov.org/resource/cf6e-9e4j.json", false ); // false for synchronous request
  xmlHttp.setRequestHeader('X-App-Token', 'pvb0OpYXHVJ3b4sJSiMzqln82');
  xmlHttp.send( null );
  console.log("ready");
  var Data = JSON.parse(xmlHttp.responseText);
  console.log(Data);
  // make Data a list of objects with properties name, artist, location
  // update html file with proper property names
  //res.sendFile('lists.html', { root: '/Users/tpl619_6/Desktop/Project1/' });
  res.render('lists', {users: Data });
});

//var template = $('#handlebars-demo').html();
// var context = {
//   "language" : "<h3>handlebars</h3>",
//   "adjective": "<h3>awesome</h3>"
// }
  
//listening at port
app.listen(app.get('port'), () => console.log(`My server is running ${app.get('port')}...`))
