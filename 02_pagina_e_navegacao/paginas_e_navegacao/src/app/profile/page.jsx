import { redirect } from 'next/navigation';
import React from 'react'

const Profilepage = () => {
    // true= logado, e false = deslogado
    // chamada pra o DB, tentando achar o usuario pelo id ou email
    const user = true;
    if(!user){
        redirect("/");
    }

  return (
    <div>
      <h1>Bem vindo ao seu perfil</h1>
    </div>
  )
}

export default Profilepage
