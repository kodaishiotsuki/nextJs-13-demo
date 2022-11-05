import React from 'react'
import { Todo } from '../../../types/todo'

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  //SSR
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  )
  const todo: Todo = await res.json()
  return todo
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId)
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage
