import uuid from 'uuid'

export default function manageTodo(state = { todos: [] }, action) {
  console.log('State', state, 'Action', action)
  switch (action.type) {
    case 'ADD_TODO':
      const TODO = { id: uuid(), text: action.payload.text }
        console.log('NEW TODO', TODO)
      return { todos: state.todos.concat(TODO) };
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload)}
    default:
      return state;
  }
}
