import Link from "next/link";
import React from "react";

const PostsPage = () => {
  const postsIds = [1, 2, 3];

  return (
    <div className="min-h-full">
      <main className="w-full max-w-3xl mx-auto p-8 bg-white rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Meu Blog</h1>

        <ul className="space-y-3">
          {postsIds.map((id) => (
            <li key={id}>
              <Link
                href={`/posts/${id}`}
                className="text-blue-600 hover:underline">
                Ver Post {id}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <Link href="/" className="text-slate-600 hover:underline">
            Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PostsPage;