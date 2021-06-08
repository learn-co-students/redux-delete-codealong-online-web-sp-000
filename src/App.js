import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import TodosContainer from './components/todos/TodosContainer'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo addTodo={this.props.addTodo}/>
        <TodosContainer delete={this.props.delete}/>
      </div>
    );
  }
}

const stateToProps = state => {
    return {
        todos: state.todos
    }
}

const dispToProps = dispatch => {
    return {
        addTodo: text => dispatch({ type: 'ADD_TODO', payload: text }),
        delete: text => dispatch({ type: 'DELETE_TODO', payload: text})
    }
}

export default connect(stateToProps, dispToProps)(App)
