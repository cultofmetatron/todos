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
                //yess!! this seems to work
                history.pushState({action:"add-todo"}, "add a Todo", "/add-todo" );
                //pushState by sitself doesn't trigger so I do it explicitly here
                $(window).trigger('popstate');
            },

        }
    })

    return createTodoView;

});


