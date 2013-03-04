define(['models/todoitem'], function(TodoItem) {
    //here we declare a collection of TodoItems!!
    var TodoCollection = Backbone.Collection.extend({
        model: TodoItem,

    })




})
