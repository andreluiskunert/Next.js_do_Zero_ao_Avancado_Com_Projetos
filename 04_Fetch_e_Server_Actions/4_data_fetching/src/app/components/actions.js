// // Sabádo 18/04/2026_De tarde

"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = parseInt(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  revalidatePath("/");

  redirect("/");
}

export async function addTodo(formData) {
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = "pendente";

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  console.log(todo);

  redirect("/");
}

export async function findTodoById(id) {
  // 11 - erro backend - error.js
  // throw new Error("Ops!");

  const todo = await db.todo.findFirst({
    where: { id },
  });

  return todo;
}

export async function updateTodo(formState, formData) {
  const id = formData.get("id")
   const titulo = formData.get("titulo");
  const descricao = formData.get("descricao")
}
