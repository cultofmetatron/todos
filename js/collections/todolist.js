define(['models/todoitem', 'localstorage'], function(TodoItem) {
    //here we declare a collection of TodoItems!!
    console.log(Backbone.localStorage);
    var TodoCollection = Backbone.Collection.extend({
        model: TodoItem,

        localStorage: new Backbone.localStorage("TodoCollection"),

    })

    return new TodoCollection();
})
