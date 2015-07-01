var express = require('express');
var router = express.Router();
var model = require('../models/index.js');
var Hotel = model.Hotel;
var Restaurant = model.Restaurant;
var ThingToDo = model.ThingToDo;
var Place = model.Place;

/* GET home page. */
router.get('/', function(req, res, next) {
	Hotel.find({}, function(err, hotels) {
		Restaurant.find({}, function(err, restaurants) {
			ThingToDo.find({}, function(err, things) {
				res.render('index',{ hotels: hotels, restaurants: restaurants, things: things });
			});
		});
	});
});



module.exports = router;
