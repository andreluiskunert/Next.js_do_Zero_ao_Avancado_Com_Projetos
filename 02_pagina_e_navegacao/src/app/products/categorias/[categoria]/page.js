import Link from "next/link";
import React from "react";
const CategoryPage = () =>{
    return 
      <div className="min-h-full">
      <main className="w-full max-w-3xl mx-auto p-8 bg-white rounded-xl shadow">
        <marquee>Estamos na página Sobre!</marquee>
          <h1> Conheça nossas roupas:</h1>
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Voltar para Home
          </Link>
        </div>
      </main>
    </div>
  
};

export default CategoryPage;