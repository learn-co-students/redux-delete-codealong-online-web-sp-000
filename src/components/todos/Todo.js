import React from 'react'

// const Todo = props => <li>{props.text}</li>

// Todo is receiving this.props.delete
const Todo = props => {
    return (
        <div>
            {/* <span>{props.text}</span> */}
            {/* when id is added */}
            <span>{props.todo.text}</span>
            {/* <button onClick={() => props.delete(props.text)}>DELETE</button> */}
            {/* Now that we've got todo.id, we can modify the Todo component to use props.todo.id on click */}
            <button onClick={() => props.delete(props.todo.id)}>DELETE</button>        
        </div>
    )
}

export default Todo;

// When we click the button we want to be able to delete this particular todo
//  we add an onClick attribute to the new button
// To keep this component small, we can provide an anonymous function in-line
// We're providing a definition for an anonymous function
//  Inside the definition, we're calling props.delete , and passing in the only other prop available, props.text

// Back in our connected TodosContainer, when this delete button is clicked
// the value of props.text is passed into our dispatched action as the payload.
// now we have the ability to dispatch an action to the reducer from each Todo

