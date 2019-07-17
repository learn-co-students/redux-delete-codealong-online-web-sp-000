import React from 'react'

//We updated this component to incorporate our delete btn, which has an onClick with an arrow function that calls our delete func and passes in the text of the todo.

// Back in our connected TodosContainer, when this delete button is clicked, the value of props.text is passed into our dispatched action as the payload.

const Todo = props => {
  return (
    <div>
      <span>{props.text}</span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
