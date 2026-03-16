"user client";
import React from 'react'
import Link from "next/link";
import { userPathname } from "next/navigation"


const NavPage = () => {
    const pathname = userPathname();
 
  return (
  
   
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <h1>
          <nav>
 <ul>
        <li>
         <Link href="/"> home</Link> <br />
        </li>
        <li>
          <Link href="/sobre"> Sobre</Link>
        </li>
    </ul>
    </nav>
    </h1>
    
     </main>
    </div>
  );
};

export default NavPage; 
