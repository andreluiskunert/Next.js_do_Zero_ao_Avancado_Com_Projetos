"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteTodo(formData) {
  const id = parseInt(formData.get("id"));

  await db.todo.delete({
    where: { id },
  });

  redirect("/");
}

export async function toggleTodoStatus(formData) {
  const id = parseInt(formData.get("id"));

  const todo = await db.todo.findUnique({
    where: { id },
  });

  const novoStatus =
    todo.status === "completa" ? "pendente" : "completa";

  await db.todo.update({
    where: { id },
    data: { status: novoStatus },
  });

  redirect("/");
}

export async function updateTodo(formData) {
  const id = parseInt(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");

  await db.todo.update({
    where: { id },
    data: { titulo, descricao },
  });

  redirect("/");
}