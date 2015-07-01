var express = require('express');
var router = express.Router();
var model = require('../models/index.js');
var Hotel = model.Hotel;
var Restaurant = model.Restaurant;
var ThingToDo = model.ThingToDo;
var Place = model.Place;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{});
});




module.exports = router;
