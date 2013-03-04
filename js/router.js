define(['views/index', 'views/todolist', 'views/create-todoitem', 'fixtures/todos'],
function(IndexView,    TodoListView,      CreateTodoView , todoFixtures) {

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
            var todoListView = new TodoListView({
                collection:todoFixtures,
            });
            console.log(todoListView);
            todoListView.render();
            /*
            todoFixtures.forEach(function(item) {
                console.log(item.get('title'));
            })
            */
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
            this.navigate('index');
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
