import React from 'react'

// const Todo = props => <li>{props.text}</li>

/* code change */
const Todo = props => {
    return (
    <div>
        {/* <span>{ props.text }</span><button onClick={() => props.delete(props.text)}>Delete</button> */}

        {/* code change  */}
        <span>{ props.todo.text }</span><button onClick={() => props.delete(props.todo.id)}>Delete</button>
    </div>
    )
}

export default Todo;

/*
This component is receiving `this.props.delete`.

After applying the button, once it's clicked,
you want to be able to delete this particular todo.

At the moment, your todos are just strings, stored in an array.
Since that is all you have to work with, add an onClick attribute to the new button.

To keep this component small, you can provide an anonymous function in-line.

You're now providing a definition for an anonymous function.

Inside the definition, you're calling `props.delete`,
and passing in the only other prop available, props.text.

Back in your connected TodosContainer, when this delete button is clicked,
the value of `props.text` is passed into your dispatched action as the `payload`.

There is a console.log in your reducer that displays actions.
Clicking the delete button should log an action with the todo's text content as the payload.

Now you have the ability to dispatch an action to the reducer from each Todo.
*/

/*
Now that you've got todo.id, you can modify the Todo component to use
`props.todo.id` on click, so that when `props.delete `is called,
an action is dispatched that contains an id only as its payload.
*/
