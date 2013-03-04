define(['text!templates/_create-todo.hbs'], function(createTodoTemplate) {
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
                console.log('cick event triggerred');
                window.history.pushState({foo:"bar"}, "create todo", "/add-todo");
            },

        }
    })

    return createTodoView;

});


