import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map(todo => <Todo key={todo.id} delete={this.props.delete} todo={todo} />)
  // change the id here to actually be the todo's id
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
    delete: todoText => dispatch ({type: 'DELETE_TODO', payload: todoText})
  }
}
// now this.props.delete isa method to take in the text you want to delete
// sends an action to redux store
// lets give each Todo access to this method via delete={this.props.delete}
// now add a button to Todo prenstational component

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
