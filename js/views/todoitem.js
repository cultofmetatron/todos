define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el: function() {
                return $('#todos > ul.todoList');
        },
        render:function() {
            console.log("inside the todoItemView  render function");

            var context = {
                title:this.model.get('title'),
                checked:this.model.get('checked'),
            }
            var compiledTemplate = Handlebars.compile(todoTemplate);
            var contextualized = compiledTemplate(context);
            this.$el.append(contextualized);
            //return contextualized;
        }

    })

    return TodoItemView;
})
