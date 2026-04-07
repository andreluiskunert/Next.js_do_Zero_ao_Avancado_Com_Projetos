// import Button from "@/components/Button";
import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  // 3ª -Resgatando dados do dados
  const todos = await db.todo.findMany();


  return (
    <div>
      <main className="container mx-auto p-4">
        <h1 className="text-2x1 font-bold mb-4">Todos!</h1>
        <p> Bora rever materia</p>
        <Link href="/todos/create"> Ir pra Todo</Link>
         <h1 className="text-2x1 font-bold mb-4">Todos</h1>
         <div className="space-y-4">
           {todos.map((todo) =>(
            <div key={todo.id} className="bg-gray-100 rounded-lg shadow"> 
            <div>
              <h2>{todo.titulo}</h2>
              <p>{todo.descricao}</p>
              </div>
            </div>
           ))}
         </div>
      </main>
    </div>
  );
}
