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
            console.log(this.el);
            this.$el.append(contextualized);
            //return contextualized;
        },
        events: {
            'click a.destroy': "destructo",

        },
        destructo:function(e) {
            e.preventDefault();
            console.log('hello');
        }

    })

    return TodoItemView;
})
