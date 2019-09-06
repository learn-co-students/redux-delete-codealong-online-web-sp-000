import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => {
    return this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={todo.id} text={todo} />)
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

const mapDispatchToProps = dispatch => {
    return {
      delete: todoText => dispatch({type: 'DELETE_TO', payload: todoText})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
