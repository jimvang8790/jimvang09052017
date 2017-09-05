var express = require('express');
var router = express.Router();
var fs = require('fs');
var companies = JSON.parse(fs.readFileSync('./data/Companies.json', 'utf8'));
var guests = JSON.parse(fs.readFileSync('./data/Guests.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hotel Company', companies: companies, guests: guests });
});

module.exports = router;
