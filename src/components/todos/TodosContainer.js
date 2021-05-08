import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  //passing props to ToDo.js
  //giving each Todo component rendered access to our 'DELETE_TODO' action 
  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} text={todo} />)
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

//include delete action giving our Todo container access to this.props.delete
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText =>
    dispatch({
      type: 'DELETE_TODO',
      payload: todoText
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
