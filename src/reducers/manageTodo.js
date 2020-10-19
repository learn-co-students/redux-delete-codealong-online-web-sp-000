import uuid from 'uuid';

export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_TODO':

      // return { todos: state.todos.concat(action.payload.text) };

      const todo = {
        id: uuid(),
        text: action.payload.text
      }

      return { todos: state.todos.concat(todo) };
    
    case 'DELETE_TODO':

    //  return{ todos: state.todos.filter(todo => todo !== action.payload) }
      //  that returns every todo that doesn't match what is contained in action.payload
      // wnen id is added as uuid then return is - i to ne radi???
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}

// Our todos are stored as strings in an array
// to remove a specific string from an array, but one of the more brief options is to use filter
//  By adding a second case to our manageTodo reducer, we can write a filter
//  that returns every todo that doesn't match what is contained in action.payload

// What if you have multiple todos with the same text? 
// With this set up, every todo that matches action.payload will be filtered out
// instead of filtering just text, it would be better if we gave our Todos specific IDs

// A Todo should have an id the moment it gets created. 
// So, we know that our reducer creates the Todo when a ADD_TODO action is dispatched.
//  Let's update the code in there so that it also adds an id.
// Using uuid() will generate a long random string each time a todo is created.
// Now, instead of just storing an array of strings in our store, we'll be storing an array of objects.

