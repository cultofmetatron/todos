define(function() {
    var TodoItem = Backbone.model.extend({
        initialize:function() {
            //initialize here
        },
        defaults: {
            //by default, todoitems should be unchecked
            checked: false,
            title: "default",
            order: 0,
        }
    });



    return TodoItem;

})
