define(['text!templates/_create-todo.hbs'], function(createTodoTemplate) {
    var createTodoView = Backbone.View.extend({
        el:function(){
               return $('#todos > div.create');
           },
        render:function() {
                   console.log("loading create form");
                   var compiledTemplate = Handlebars.compiledTemplate(createTodoTemplate);
                   this.#el.html(compiledTemplate);
               }
    })

});


