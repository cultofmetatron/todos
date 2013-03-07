define(['views/todoitem'], function(TodoItemView) {
    var TodoListView = Backbone.View.extend({
        el:function() {
            return $('div#todos > ul.todoList');
        },
        render: function() {
            this.$el.empty();
            this.collection.forEach(function(todoItem) {
                var todoItemView = new TodoItemView({
                    model:todoItem,
                });

                //console.log(todoItem.get('title'));
                todoItemView.render();
                //this.$el.append(todoItemView.render());
            });
        },

    });
    return TodoListView;

});
