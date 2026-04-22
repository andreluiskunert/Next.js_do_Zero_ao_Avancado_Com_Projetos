import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import TodoPage from '../create/page';
import TodoForm from '@/app/components/TodoForm';

const TodoShow = async ({ params }) => {
  await new Promise((a) => setTimeout(a, 2000));
  const { id } = await params;
  const todoId = Number(id);

  if (Number.isNaN(todoId)) {
    notFound();
  }

  const todo = await db.todo.findFirst({
    where: {
      id: todoId,
    },
  });

  if (!todo) {
    notFound();
  }

  return (
    <div>
      <h1>{todo.titulo}</h1>
      <TodoForm todo={todo}></TodoForm>
    </div>
  );
};

export default TodoShow;