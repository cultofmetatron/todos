define(['views/index', 'views/todoitem', 'views/create-todoitem'],
function(IndexView,    TodoItemView,      CreateTodoView ) {

    //declare the router
    var router = Backbone.Router.extend({
        currentView: null,
        routes: {
                    'index':'index',
                    'add-todo':'addTodo'
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
        refreshIndex: function() {


        },
        addTodo: function() {
            // add todo to collection and refresh the list
            console.log('addTodo logic executed!!');
            $(body).html("<h1>hello</h1>");
        },

        index: function() {
            var indexView = new IndexView();

            console.log("right after the index is rendered");
            this.changeView(indexView);


            this.loadTodos();
            this.loadCreateForm();

        },






    })

    return new router();

})
