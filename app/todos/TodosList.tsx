import Link from 'next/link'
import React from 'react'
import { Todo } from '../../types/todo'

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  // console.log('Thisis the todos', todos)
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
