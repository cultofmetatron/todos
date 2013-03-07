define(['collections/todolist', 'models/todoitem'] ,
function(TodoList, TodoItem) {
    //returns an explicit collection of todos
    console.log(TodoList);
    var todoList = TodoList;

    todoList.add([
        //fixtures of items
        {title:"first item", checked: false, order: 0},
        {title: "snakes on a plane mofo", checked: true, order: 0},
        {title: "god yes, its another list item!! ok!!", checked:true, order: 0},
    ]);

    //todoList.sync();



    return todoList;
})
