import { findTodoById } from "@/actions";
import { notFound } from "next/navigation";

export default async function TodoEdit({ params }) {
  const { id } = await params;
  const todoId = parseInt(id, 10);

  const todo = await findTodoById(todoId);

  if (!todo) return notFound();

  return (
    <div>
      <h1>Editar Todo</h1>
      <p>{todo.titulo}</p>
    </div>
  );
}