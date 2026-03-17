// "user client";
// import React from 'react'
// import Link from "next/link";
// import { userPathname } from "next/navigation"


// const NavPage = () => {
//     const pathname = userPathname();
 
//   return (
  
   
//       <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//     <h1>
//           <nav>
//  <ul>
//         <li>
//          <Link className={`link ${pathname == "/" ? "active" : "" }`} href="/"> home</Link> <br />
//         </li>
//         <li>
//           <Link className={`link ${pathname == "/sobre" ? "active" : "" }`} href="/sobre"> Sobre</Link>
//         </li>
//     </ul>
//     </nav>
//     </h1>
    
//      </main>
//     </div>
//   );
// };

// export default NavPage; 
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavPage() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={pathname === '/' ? 'active' : ''} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={pathname === '/sobre' ? 'active' : ''} href="/sobre">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}