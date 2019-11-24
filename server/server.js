// require('dotenv').config();
const express = require('express')
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
// Create a new Express app
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser')
const API_PORT = 5000;
app.use(cors());
const router = express.Router();

const authConfig = {
  domain: "dev-ibrtdcrj.auth0.com",
  audience: "YOUR_API_IDENTIFIER"
};
// Define middleware that validates incoming bearer tokens
// using JWKS from dev-ibrtdcrj.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-ibrtdcrj.auth0.com/.well-known/jwks.json'
  }),

  audience: 'https://api.mysite.com',
  issuer: 'https://dev-ibrtdcrj.auth0.com/',
  algorithms: ['RS256']
});

// this is our MongoDB database
const dbRoute ='mongodb+srv://liliapaz:y0ungthug@cluster0-3puql.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// setting port
app.set('port', process.env.PORT || 5000)
// get request to render landing page

app.use('/', require('./routes/api'))

// listening at port
app.listen(app.get('port'), () => console.log(`My server is running ${app.get('port')}...`))
