define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el: function() {
                return $('#todos > ul.todoList');
        },
        render:function() {
            console.log("inside the todoItemView  render function");
            console.log(this.$el.html());
            var compiledTemplate = Handlebars.compile(todoTemplate);
            this.$el.append(compiledTemplate);
        }

    })

    return TodoItemView;
})