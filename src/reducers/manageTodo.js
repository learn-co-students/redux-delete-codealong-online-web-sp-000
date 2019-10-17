import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  let id = uuid();
  switch (action.type) {

    case 'ADD_TODO':
      const todo = {
        id: id,
        text: action.payload.text
      };
      return { todos: state.todos.concat(todo) };

    case 'DELETE-TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
