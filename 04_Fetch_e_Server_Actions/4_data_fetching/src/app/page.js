import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <main className="container mx-auto p-4">
     <p> <marquee> bora revisão  </marquee>
     </p>
      <h1 className="text-2xl font-bold mb-4 text-white">Todas as funções!</h1>

      <p className="text-white mb-2">função</p>

      {/* <Link href="/todos/create" className="text-blue-400 underline">
        Ir pra Todo
      </Link> */}

      <h2 className="text-2xl font-bold mt-4 mb-4 text-white">Todos</h2>

      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-gray-100 rounded-lg shadow p-4 text-black"
          >
            <h3 className="text-lg font-semibold">{todo.titulo}</h3>
            <p className="text-sm mt-2">{todo.descricao}</p>
          </div>
        ))}
      </div>
    </main>
  );
}