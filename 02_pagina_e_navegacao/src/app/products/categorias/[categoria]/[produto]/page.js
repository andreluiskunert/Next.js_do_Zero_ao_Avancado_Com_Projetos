import Link from "next/link";
import React from "react";

const ProductPage = ({ params }) => {
  const produto = params.produto;

  return (
    <div className="min-h-full">
      <main className="w-full max-w-3xl mx-auto p-8 bg-white rounded-xl shadow">
        <marquee>Estamos na página Produto!</marquee>

        <h2>Vendo produto {produto}</h2>

        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;