import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

//NOTE: after we generated an id for each todo with Math.random(), we had to update this container so that the renderTodos function accepted an object instead of a string like we did before

class TodosContainer extends Component {
  //here we pass down the delete function as props to our <Todo /> that we made in our mapDispatchToProps. Don't forget to update the <Todo /> functional component to include a butto and the id we generated with Math.random()
  renderTodos = () => this.props.todos.map((todo) => <Todo  delete={this.props.delete} key={todo.id} todo={todo} />)

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

//we want to incl a delete button on each todo. however, our todo is a presentational (functional) component so we don't want to put logic there. instead, we want to create it in our ToDosContainer, which is what's connected to the Redux store, so we will write our dispatch here and include a function that can be passed as props in our render above.

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
