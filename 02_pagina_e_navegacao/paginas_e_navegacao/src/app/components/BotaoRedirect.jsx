"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const BotaoRedirect = () => {
  const router = useRouter();
  return (
    <div>
   <button> Dashboard</button>
    </div>
  )
}

export default BotaoRedirect
