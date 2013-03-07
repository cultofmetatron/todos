define(['models/todoitem', 'localstorage'], function(TodoItem) {
    //here we declare a collection of TodoItems!!

    console.log("localstorage: " + Backbone.LocalStorage)
    var TodoList = Backbone.Collection.extend({
        model: TodoItem,
        localStorage: new Backbone.LocalStorage("todoList"),
    });
    var todoList = new TodoList();
    return todoList;
})
