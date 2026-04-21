"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = parseInt(formData.get("id"), 10);

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

  await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function findTodoById(id) {
  const todo = await db.todo.findUnique({
    where: { id },
  });

  return todo;
}

export async function updateTodo(formState, formData) {
  const id = parseInt(formData.get("id"), 10);
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  await db.todo.update({
    where: { id },
    data: {
      titulo,
      descricao,
    },
  });

  revalidatePath("/");
  redirect("/");
}