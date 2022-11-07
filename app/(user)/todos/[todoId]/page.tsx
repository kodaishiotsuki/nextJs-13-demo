import { notFound } from 'next/navigation'
import React from 'react'
import { Todo } from '../../../../types/todo'

export const dynamicParams = true

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  //SSR
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } } //ISR
  )
  const todo: Todo = await res.json()
  return todo
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId)
  if (!todo.id) return notFound()
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

export const generateStaticParams = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  //for this Demo, we are only prebuilding the first 10 pages to avoid being rate limited by the Demo API
  const trimmedTodos = todos.splice(0, 10)
  return trimmedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }))
}
