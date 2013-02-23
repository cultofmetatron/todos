define(['text!templates/index.hbs'],
        function(indexTemplate, TodoItemView) {


    var IndexView = Backbone.View.extend({
        el:$('body'),
        render:function() {
            var compiledTemplate = Handlebars.compile(indexTemplate);
            this.$el.html(compiledTemplate);
        }
    })

    return IndexView;

} );
