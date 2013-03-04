define(['text!templates/_create-todo.hbs', 'router'], function(createTodoTemplate, appRouter) {
    var createTodoView = Backbone.View.extend({
        el:function(){
               return $('#todos > div.create');
        },
        render:function() {
                   console.log("loading create form");
                   var compiledTemplate = Handlebars.compile(createTodoTemplate);
                   this.$el.html(compiledTemplate);
        },
        events: {
                  'click a#add-todo': function(e) {
                        e.preventDefault();
                        appRouter.navigate('add-todo');
                    }

                }
    })

    return createTodoView;

});


