define(['views/index', 'views/todoitem', 'views/create-todoitem'],
        function(IndexView, TodoItemView, CreateTodoView ) {

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
        loadTodos:function() {
            console.log('in loadTodos');
            var todoItemView = new TodoItemView();
            todoItemView.render();

        },
        loadCreateForm:function() {
            var createTodoView = new CreateTodoView();
            createTodoView.render();
        },
        index: function() {
            var indexView = new IndexView();
            this.changeView(indexView);
            console.log("right after the index is rendered");
            console.log($('#todos > ul.todoList').html()); //this correctly loads the updated dom
            this.loadTodos();
            this.loadCreateForm();
        },






    })

    return new router();

})
