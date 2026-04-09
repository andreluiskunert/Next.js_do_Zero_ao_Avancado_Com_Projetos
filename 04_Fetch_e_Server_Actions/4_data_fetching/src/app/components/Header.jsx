import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <header className="bg-blue-500 text-white p-4">
    <nav className="contair mx-auto flex justify-between">
        <Link href="/"> Lista de tarefa </Link>
          <Link href="/todos/create"> Criar tarfea </Link>
    </nav>
  </header>
  )
}

export default Header
