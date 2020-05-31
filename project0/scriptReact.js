const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

import React from "react";
import { render } from "react-dom";


let id = 0;

const Todo = props => (
  <li>
    <input type="checkbox" onChange={props.onCheck} checked={props.todo.checked}/>
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class AppTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    const text = prompt("Enter new Todo!");
    this.setState({
      todos: [...this.state.todos, {id: id++, text: text, checked: false}],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        let newTodo = todo
        newTodo.checked = !todo.checked
        return newTodo
      })
    })
  }

  render() {
    return (
      <div>
        <div>Total: {this.state.todos.length}</div>
        <div>Unchecked: {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo onCheck={() => this.toggleTodo(todo.id)} 
            onDelete={() => this.removeTodo(todo.id)} 
            todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<AppTodo />, rootElement);
