import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  }
  
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

//gives TodosContainer access to this.props.delete 
// which can be passed down to Todo giving each rendered Todo component
// access to the 'DELETE_TODO' acton
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({ type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
