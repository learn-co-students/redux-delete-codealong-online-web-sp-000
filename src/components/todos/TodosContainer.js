import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'


class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} todo={todo} delete={this.props.delete} />)

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



export default connect(mapStateToProps, dispatch => { 
  return {
    delete: id => dispatch({type: 'DELETE_TODO', id: id})
  }})(TodosContainer);
