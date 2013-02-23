define(['views/index', 'views/todoitem'], function(IndexView, TodoItemView ) {

    //declare the router
    var router = Backbone.Router.extend({
        currentView: null,
        routes: {
                    'index':'index'

                },
        changeView: function(newView) {
            if(this.currentView != null) {
                this.currentView.undelegateEvents();
            }
            this.currentView = newView;
            this.currentView.render();
        },
        index: function() {
            var indexView = new IndexView();
            this.changeView(indexView);
            console.log("right after the index is rendered");
            console.log($('#todos > ul.todoList').html()); //this correctly loads the updated dom
            var todoItemView = new TodoItemView();//this access the OLD one??
            todoItemView.render();
        },






    })

    return new router();

})
