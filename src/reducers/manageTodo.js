// add this to be able to import uuid for key management
import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)};
    default:
      return state;
  }
}
// how to look for the text and remove all that match it!
//{todos: state.todos.filter(todo => todo !== action.payload)};
// but better actually to give them ids - we added ids in later 

// look at concat - how to add a todo
