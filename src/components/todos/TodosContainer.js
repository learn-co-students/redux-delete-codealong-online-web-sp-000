import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

    // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)

    /* code change */
    renderTodos = () => {
        return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
    }

    render() {
        return(
        <div>
            { this.renderTodos() }
        </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

/* code change */
const mapDispatchToProps = dispatch => {
    return {
        delete: todoText => dispatch({
            type: 'DELETE_TODO',
            payload: todoText
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);

/*
Modifying the TodosContainer:

This is the component that connects to Redux.

After writing mapDispatchToProps()
the class will have access to this.props.delete, which can take in an argument
and send it as the action's payload.

You can then pass this.props.delete down to `Todo`,
so that each `Todo` component rendered will have access to your 'DELETE_TODO' action.
*/

/*
After udating your `manageTodo` file, your renderTodos() method will need to change,
because you're now using the 'uuid' library instead of the `index` variable
provided by `map()`.

Now its using your randomly generated ID, and is less prone to errors in the virtual DOM.

You'll need both `todo.id` and `todo.text` to be passed into Todo
so pass both down as the object, `todo={todo}`.
*/
