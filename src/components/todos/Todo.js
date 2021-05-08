//presentational todo component 

import React from 'react'

const Todo = props => {
    return (
        <div>
            {/* update when assigning todo an id . When action is dispatched the click event contains the id as its payload */}
            <span>{props.todo.text}</span>
            {/* add onClick attribute with anonymous in-line function (a function declared without any named identifier to refer to it. Not globally or locally accesible) */}
            <button onClick={() => props.delete(props.todo.id)}>DELETE
            </button>
            {/* props.text is passed as a value into the dispatch action when the button is clicked  */}
        </div>
    )
}

export default Todo;
