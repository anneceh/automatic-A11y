import React from "react";
import logo from './logo.svg';
import { TodoForm } from "../../src/components/todos/TodoForm";

import './App.css';

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      className="todo"
      
    >
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button className="outline-success" onClick={() => markTodo(index)}>✓</button>{' '}
        <button className="outline-danger" onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form class="form" onSubmit={handleSubmit}>
      <label>
        Add Todo:
        <input aria-label="Write todo item" type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Be nice",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>TODO List </h3>
        <FormTodo addTodo={addTodo} />
        <img src={logo} className="App-logo"/>
        <div>
          <ul>
          {todos.map((todo, index) => (
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
          ))}
          </ul>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
