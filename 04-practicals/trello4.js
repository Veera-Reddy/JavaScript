
const myTodos = ['Buy Bread', 'Go To Gym','Pratice']

console.log(myTodos);

//console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [ {
    title : 'Buy Bread',
    isDone : false,
},{
    title : 'Go To Gym',
    isDone : true,
}, {
    title : 'Practice',
    isDone : true,
},{
    title : 'Go To Gym',
    isDone : true,
},]


const index = newTodos.findIndex(function(todo,index){
   console.log(todo);
   
    return todo.title === 'Go To Gym'
})

console.log(index);

const findTodo = function (todos,myTitle) {
    const findingTodo = todos.findIndex(function(todo,index) {
        return todo.myTitle === myTitle.toLowerCase()    
    })
    return todos[index]
}

let printMe = findTodo(newTodos,'Go To gym')
console.log(printMe);

console.log(findingTodo);
