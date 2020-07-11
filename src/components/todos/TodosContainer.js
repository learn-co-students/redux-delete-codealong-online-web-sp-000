import React, {Component} from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {

    renderTodos = () => {
        return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)    
    }
    //Each component rendered now has access to the delete action

    render() {
        return(
            <div>
                {this.renderTodos()}
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    //TodosContainer now has access to this.props.delete which can take in an argument and send it as the action's payload. We can then pass this.props.delete down to Todo so that each Todo component rendered will have access to our DELETE_TODO action
    return {
        delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
