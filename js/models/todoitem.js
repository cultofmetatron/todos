define(function() {
    var TodoItem = Backbone.model.extend({
        initialize:function() {
            //initialize here
        },
        defaults: {
            //by default, todoitems should be unchecked
            checked: false,
            title: "",
        }
    });



    return TodoItem;

})
