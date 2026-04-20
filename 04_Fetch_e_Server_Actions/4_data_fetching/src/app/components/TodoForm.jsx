"use client"
import React from 'react';
import { useFormState } from 'react-dom';

const TodoForm = () => {
    const [formState, action] = useFormState(fn, {errors: ""});

  return (
          <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label
          htmlFor="titulo"
          className="block text-sm font-medium text-gray-700"
        >
          Título
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Insira o título"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </label>

        <label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva a tarefa"
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full h-32 resize-none"
          ></textarea>
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Criar Todo
        </button>
      </form>
  )
}

export default TodoForm
