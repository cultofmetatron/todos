define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el: function() {
                return $('#todos > ul.todoList');
        },
        context: {
                     title: "snakes on a plane",
                     checked: true,
        },
        render:function() {
            console.log("inside the todoItemView  render function");
            console.log(this.$el.html());
            var compiledTemplate = Handlebars.compile(todoTemplate);
            var contextualized = compiledTemplate(this.context);
            this.$el.append(contextualized);
        }

    })

    return TodoItemView;
})
