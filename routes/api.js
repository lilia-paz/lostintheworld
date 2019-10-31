require('dotenv').config();
//const eventful = require('eventful-node');

const express = require('express');
const client = require('../connection');

const clientEventful = new eventful.Client(process.env.EVENTFUL_KEY);

const router = express.Router();

// Get All Users
router.get('/users', (req, res) => {
  client.query('SELECT * from users', (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results.rows);
  });
});

module.exports = router;