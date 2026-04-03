import Image from "next/image";
import Link from "next/link";
import { db } from "./db";

export default async function Home() {
  // 3 -Resgatando dados do banco
  const todos = await db.todo.findMany();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="contrainer mx-auto p-4">
       <h1> Prisma</h1>
      <Link href="/todos/create">Criação de todos</Link>
      <h1 className="text-2x1 font-bold mb-4">Todos!</h1>
      </main>
    </div>
  );
}
