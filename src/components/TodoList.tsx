import { TodoItem } from './TodoItem'
import { type Todo } from '../types'

interface TodoListProps {
  todos: Todo[];
  markTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

export const TodoList = ({todos, markTodo, removeTodo}: TodoListProps) => {
  
    return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
            key={todo.text} 
            todo={todo}
            markTodo={ () => markTodo(index) }
            removeTodo={ () => removeTodo(index) }
        />
      ))}
    </ul>
  )
}