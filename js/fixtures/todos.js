define(['collections/todolist', 'models/todoitem'] ,
function(TodoList, TodoItem) {
    //returns an explicit collection of todos
    console.log(TodoList);
    var todoList = TodoList;
    todoList.fetch();
    /*
    todoList.add([
        //fixtures of items
        new TodoItem({title: "god yes, its another list item!! ok!!", checked:true, order: 0}),
    ]);
    */

    todoList.each(function(item) {
        item.save();
    })

   // todoList.sync();



    return todoList;
})
