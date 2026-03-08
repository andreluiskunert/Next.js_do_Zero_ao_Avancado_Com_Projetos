"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ExemploPage = () => {
    const searchParams = useSearchParams();
    const valorParam = searchParams.get("parametro");
    // console.log(searchParams)
    const presencaParam = searchParams.has("parametro")
  return (
    <div>
        <h1>Exibindo resultados para: {valorParam}</h1> <br />
            <marquee> Aqui temos exemplos de Parametros em Next </marquee>
        {presencaParam ? "Tem parametros": "não tem...."}
    </div>
  )
}

export default ExemploPage
