"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const BotaoRedirect = () => {
  const router = useRouter();
   function sendEmailAndRedice() {
    //  envio Email
    router.push("/dashboard")
   }
  return (
    <div>
   <button onClick={sendEmailAndRedice}> Finalizar processo </button>
    </div>
  )
}

export default BotaoRedirect
