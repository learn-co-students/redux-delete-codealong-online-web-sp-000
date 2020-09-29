import React from 'react'
 
const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}
 
export default Todo;

//Modifying the Todo Component
//Todo is receiving this.props.delete, so let's update the component a little and incorporate a button