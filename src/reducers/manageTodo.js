export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action.type);

  //our delete function returns the array of todos after filtering out the todo we no longer want, by searching for the id of the todo and returning everything but that todo

  //to give each item an id, we update the ADD_TODO case to generate one the moment a todo is created
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: Math.random *10000000000000000,
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
     return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
