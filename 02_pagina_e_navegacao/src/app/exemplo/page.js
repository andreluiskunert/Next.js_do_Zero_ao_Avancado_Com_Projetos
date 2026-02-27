"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const ExemploPage = () =>{
    const searchParams = useSearchParams();
    const valorParam = searchParams.get("parametro");
    const presencaParam = searchParams.has("parametro")
    return <div>
         <h1>Paginas de parametro: </h1> 
        
        <h2> Exibindo resultados para:{valorParam}</h2>
        {presencaParam ? "tem parametro": "não tem" } <br>
        </br>
        <Link href="http://192.168.3.78:3000/">Voltando</Link>
    </div>
    
};
export default ExemploPage;
