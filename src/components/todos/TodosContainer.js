import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  // renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
  // renderTodos =() => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={id} text={todo} />)
  renderTodos = () => {
    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
  }
  // Previously, key was based off the index provided by map
  // Now its using our randomly generated ID, and is less prone to errors in the virtual DOM
  // We'll need both todo.id and todo.text to be passed into Todo so we pass both down as the object, todo

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

// with mapDispatchToProps TodosContainer will have access to this.props.delete
// which can take in an argument and send it as the action's payload
// We can then pass this.props.delete down to Todo,
// so that each Todo component rendered will have access to our 'DELETE_TODO' action
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({
      type: 'DELETE_TODO', payload: todoText 
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
