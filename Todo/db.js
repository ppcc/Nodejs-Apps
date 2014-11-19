var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	achieved : {type:Boolean, default:false},
	category : String,
    content : String,
    expire_date : Date,
    updated_at : Date
});

mongoose.model('Todo',Todo);
mongoose.connect('mongodb://localhost/todo');