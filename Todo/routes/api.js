/*
 * Serve JSON to our AngularJS client
 */
var mongoose = require("mongoose");
var Todo = mongoose.model('Todo');

// Return All Items as JSON
exports.getItems = function (req, res) {
  Todo.find(function(err,items){
      res.json({
        items: items,
        title: "PP's ToDo"
      });
  });
};

//Add Item
exports.addItem = function(req,res){
  var data = req.body;
  new Todo({
    category : data.category,
    content : data.content
  }).save(function(err,todo){
    if(err) return console.log(err);
    res.redirect('/');
  });
}

//Delete Item
exports.delItem = function(req,res){
  console.log("ID:"+req.params.id);
  Todo.findById(req.params.id,function(err,todo){

    if(err) return console.error(err);
    todo.remove(function(error,todo){
      if(error) return console.error(error);
      res.redirect('/');
    });
  });
}