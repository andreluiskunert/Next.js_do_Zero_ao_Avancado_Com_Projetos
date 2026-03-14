
"use client";

import { useSearchParams } from "next/navigation";

export default function ExemploPage() {

  const searchParams = useSearchParams();
  const valorParam = searchParams.get('parametro')

  return (
    <div>
    <h1> Exibindo resultado pra o:{valorParam} </h1>
    </div>
  );
}

