import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos
      .map((todo, id) => <Todo key={id} todo={todo} delete={this.props.delete}/>)

  render() {
    return (
        <ul>
          {this.renderTodos()}
        </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer);
