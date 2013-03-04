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
                //window.location.hash = 'add-todo';
                //doesn't work. should ask shawn about this
                //lets try this while adding an eventhandler for popstate
                window.history.pushState("add-todo", "add a Todo", "/add-todo" );

            },

        }
    })

    return createTodoView;

});


