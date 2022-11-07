import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="p-5 bg-blue-500">
      <Link
        href="/"
        className="px-3 py-1 bg-white text-blue-500 rounded-full mr-2"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="px-3 py-1 bg-white text-blue-500 rounded-full mr-2"
      >
        Todos
      </Link>
      <Link
        href="/search"
        className="px-3 py-1 bg-white text-blue-500 rounded-full"
      >
        Search
      </Link>
    </div>
  )
}

export default Header
