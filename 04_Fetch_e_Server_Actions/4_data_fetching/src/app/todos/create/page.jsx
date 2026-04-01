import React from 'react'

const TodoPage = () => {
  const addTodo = async(FormData)=>{
  "use server";
  console.log(FormData)
  }
  return (
    <div className="max-w-md-auto mt-10">
      <h1 className="text-2X1 font-bold text-center mb-6">Criação de Todos</h1>
      <form action={addTodo} className="flex-col gap-4 p-4 bg-white shadow-lag rounded-lg">
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
           <h1> Criar novas Tarefas</h1>
           // Terça-feira, 31/03/2026_De noite

        <input
        type="text"
        id="titulo"
        name="titulo"
        placeholder="Inserir o Titulo:"
        required
         className="mt-1 px-4 border border-gray-300 rounded-md w-full" />

        </label>
         <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
           <h1> Descrição</h1>
        <textarea
        type="text"
        id="descricao"
        name="descricao"
        placeholder="Inserir a descrição do produto:"
        required
         className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32" />

        </label>
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Criar Todo</button>
      </form>
    </div>
  )
}

export default TodoPage;
