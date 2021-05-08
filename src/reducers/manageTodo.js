
//Step 1: import uuid to give each todo an id  
import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

    //adding id and text to each todo
    //this allows us to store an array of objects
      const todo = {
        //uuid() generates a long random string 
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    
    case 'DELETE_TODO':

    //update DELETE_TODO
    //match todo.id with action payload
      return {todos:
      state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}









































