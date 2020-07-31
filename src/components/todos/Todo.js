import React from 'react'

const Todo = props => {
  return(
    <div>
      <span>{props.text}{console.log(props)}</span>
      <button onClick={() => props.delete(props.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
