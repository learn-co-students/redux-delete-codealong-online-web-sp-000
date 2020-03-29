/* code change */
import uuid from 'uuid'

export default function manageTodo(state = {todos: [],}, action) {
    console.log(action)

    switch (action.type) {

    case 'ADD_TODO':
        // return { todos: state.todos.concat(action.payload.text) };

        /* code change */
        const todo = {
            id: uuid(),
            text: action.payload.text
        }

        /* code change */
        return { todos: state.todos.concat(todo) };

    /* code change */
    case 'DELETE_TODO':
        // return { todos: state.todos.filter(todo => todo !== action.payload) };
        return { todos: state.todos.filter(todo => todo.id !== action.payload) };

    default:
        return state;
    }
}

/*
Tell the store which Todo to Delete:

Your todos are stored as strings in an array.

There are a number of ways to remove a specific string from an array,
but one of the more brief options is to use `filter()`.

By adding a second case to your `manageTodo()` reducer,
you can write a `filter()` that returns every todo that doesn't match
what is contained in `action.payload`

The delete button should now successful cause todos to disappear,
but the problem is, what if you have multiple todos with the same text?

With this set up, every todo that matches `action.payload` will be filtered out.

To get around this, instead of filtering just text,
gave your `Todos` specific IDs using the `uuid` library.

A Todo should have an id the moment it gets created.

Since your reducer creates the Todo when a `CREATE_TODO` action is dispatched,
update the code so that it also adds an id.

Using `uuid()` will generate a long random string each time a todo is created.

Now, instead of just storing an array of strings in your store,
you'll be storing an array of objects.

This causes a problem 'downstream', though:
you need to update your `TodosContainer` to pass the correct content.
*/

/*
After passing an id to `props.delete`, you need to modify the reducer so that
instead of comparing `todo !== action.payload`, now that todo is an object,
and you want to match todo.id with the payload.

That way, the todo objects can be added and deleted, each with their own unique id!
*/
