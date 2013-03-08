define(['models/todoitem', 'localstorage'], function(TodoItem, storage) {
    //here we declare a collection of TodoItems!!

    console.log("localstorage: " + Backbone.LocalStorage)
    var TodoList = Backbone.Collection.extend({
        model: TodoItem,
        localStorage: new storage("my-todolist"),
        saveAll: function() {
            this.each(function(item) {
                item.save();
            })
        }
    });
    var todoList = new TodoList();
    return todoList;
})
