import Link from 'next/link'
import React from 'react'
import { Todo } from '../../../types/todo'

const fetchTodos = async () => {
  //timeout for random number of seconds between 1 and 5
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000
  await new Promise((resove) => setTimeout(resove, timeout))

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  return todos
}

const TodosList = async () => {
  const todos = await fetchTodos()

  return (
    <>
      {todos.map((todo, index) => (
        <p key={index}>
          <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default TodosList
