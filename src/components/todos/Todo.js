import React from 'react'

{ /* Todo is receiving this.props.delete so incoporate a delete button */ }
const Todo = props => {

  this.handleClick = () => props.delete(props.todo.id)

  return (
    <div>
      <span>{props.text} </span><button onClick={this.handleClick}>DELETE</button>
    </div>

  )
}

export default Todo;
