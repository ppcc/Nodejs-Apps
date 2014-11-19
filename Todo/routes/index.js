// var express = require('express');
// var router = express.Router();

// //mongoose
// // var mongoose = require('mongoose');
// // var Todo = mongoose.model('Todo');

// var api = require('./api');



// /* GET home page. */
// router.get('/', function(req,res) {
// 	res.render('index');
// });

// module.exports = router;

exports.index = function(req,res){
	res.render('index');
};
