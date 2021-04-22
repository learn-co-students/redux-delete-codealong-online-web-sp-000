import React from 'react';

const Todo = props => {

const deleteThis = () => props.delete(props.todo.id);
 return (
   <div>
     <span>{props.todo.text}</span>
     <button onClick={deleteThis}>DELETE</button>
   </div>
)
}
export default Todo;
