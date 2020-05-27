import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      // Todo id is needed the moment it gets created so we know that our reducer creates the Todo when a CREATE_TODO action is dispatched.
      // Using uuid() will generate a long random string each time a todo is created. Now, instead of just storing an array of strings in our store, we'll be storing an array of objects.
      const todo = {
        id: uuid(),
        text: action.payload.text
      }

      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':

      // Using filter to remove a specific string in an Array. This second case to our manageTod reducer is writing a filter that returns every todo that doesn't match what is contained in the action.payload
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
