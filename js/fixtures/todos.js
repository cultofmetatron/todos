define(['collections/todolist', 'models/todoitem'] ,
function(TodoList, TodoItem) {
    //returns an explicit collection of todos
    var todoList = new TodoList([
        //fixtures of items
        {title:"first item", checked: false, order: 0},
        {title: "snakes on a plane mofo", checked: true, order: 0},
        {title: "god yes, its another list item!! ok!!", checked:true, order: 0},
    ]);



    return todoList;
})
