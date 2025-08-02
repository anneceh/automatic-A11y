import { type FormEvent, useState } from 'react'


interface TodoFormProps {
  onSubmit: (todoTitle: string) => void
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [todoTitle, setTodoTitle] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (todoTitle.trim()) {
      onSubmit(todoTitle.trim())
      setTodoTitle("")
    }
  }

 return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Add Todo:
        <input 
            aria-label="Write todo item" 
            type="text" 
            className="input" 
            value={todoTitle} 
            onChange={(e) => setTodoTitle(e.target.value)}
            placeholder="Add new todo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
} 