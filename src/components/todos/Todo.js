import React from 'react'

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}
export default Todo;

// the best button to add - because it just uses the props text and sends it back to it
// display the todo text
