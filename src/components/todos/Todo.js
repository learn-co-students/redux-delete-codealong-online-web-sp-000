import React from 'react'

const Todo = props => {
  console.log("test", props.todo.id)
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
