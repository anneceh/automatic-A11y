import { useState } from 'react'
import { type Todo } from './types'
import { TodoForm } from './components/TodoForm'
import reactLogo from './assets/react.svg'
 
import './App.css'
import { TodoList } from './components/TodoList'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const markTodo = ( index: number ) => {
      const newTodos = [...todos];
      newTodos[index].complete = true;
      setTodos(newTodos);
  };
  
    const removeTodo = ( index: number ) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
     };

  const addTodo = (text: string) => {
    setTodos([...todos, {
      text,
      complete: false  
    }])
  }

  return (
   <div className="App">
      <header className="App-header">
        <h3>TODO List </h3>
        <TodoForm onSubmit={addTodo} />
        <img src={reactLogo} className="App-logo"/>
        <TodoList todos = {todos} markTodo = {markTodo} removeTodo={removeTodo}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
  )
}

export default App
