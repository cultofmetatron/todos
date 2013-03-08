define(['text!templates/_todo.hbs'], function(todoTemplate) {
    var TodoItemView = Backbone.View.extend({
        el: function() {
                return $('#todos > ul.todoList');
        },
        render:function() {
            console.log("inside the todoItemView  render function");

            var context = {
                ident:this.model.id,
                title:this.model.get('title'),
                checked:this.model.get('checked'),
            }
            var compiledTemplate = Handlebars.compile(todoTemplate);
            var contextualized = compiledTemplate(context);
            this.$el.append(contextualized);
            this.$el.find('li#' + this.model.id).on('click', function(e) {
                $(this).fadeOut().fadeIn();
            }) ;

            //return contextualized;
        },
        events: {
            'click  a.destroy': "destructo",

        },
        destructo:function(e) {
            e.preventDefault();
            console.log('hello');
        }

    })

    return TodoItemView;
})
