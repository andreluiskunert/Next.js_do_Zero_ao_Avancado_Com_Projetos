import db from "../../db";
import { redirect } from "next/navigation";
import { addTodo } from "../../actions";

export default async function TodoCreate() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Criar Nova Tarefa
      </h1>

      <form
        action={addTodo}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg"
      >
        <label>
          Título
          <input name="titulo" required />
        </label>

        <label>
          Descrição
          <textarea name="descricao" required />
        </label>

        <button type="submit">Criar Todo</button>
      </form>
    </div>
  );
}