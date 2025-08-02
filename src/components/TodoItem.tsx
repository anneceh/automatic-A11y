 
import { type Todo } from '../types'


interface TodoItemProps {
  todo: Todo;
  markTodo: () => void;
  removeTodo: () => void;
}
 
 export const TodoItem = ({ todo, markTodo, removeTodo }: TodoItemProps) => {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.complete ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button className="outline-success" onClick={() => markTodo()}>✓</button>{' '}
        <button className="outline-danger" onClick={() => removeTodo()}>✕</button>
      </div>
    </div>
  )
} 