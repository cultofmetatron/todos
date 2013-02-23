define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el:$('div#id > ul.todoList'),
        render:function() {
            var compiledTemplate = Handlebars.compile(todoTemplate);
            this.$el.append(compiledTemplate);
        }

    })

    return TodoItemView;
})
