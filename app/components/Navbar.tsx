// import Link from 'next/link'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='max-w-[900px] mx-auto -mb-16'>
//         <div className='py-5 relative z-50 top-5 border-b-2 border-zinc-300'>
//             <div className='flex justify-between items-center sticky'>
//                 <div className=''>
//                     <Link href="/" className='text-2xl text-slate-950 font-bold'>MediaShark</Link>
//                 </div>
//                 <div className=''>
//                     <ul className='flex justify-center items-center gap-5'>
//                     <li className=''><Link href="/" className='text-zinc-100 font-bold text-sm'>Home</Link></li>
//                         <li className=''><Link href="/" className='text-zinc-800 dark:text-zinc-100 font-bold text-sm'>Fonctionnalités</Link></li>
//                         <li className=''><Link href="/" className='text-zinc-800 dark:text-zinc-100 font-bold text-sm'>Qui sommes-nous?</Link></li>
//                         <li className=''><Link href="/" className='text-zinc-800 dark:text-zinc-100 font-bold text-sm'>Blog</Link></li>
//                         <li className=''><Link href="/" className='text-zinc-800 dark:text-zinc-100 font-bold text-sm'>Contactez-nous</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="mb-14 px-4 lg:px-0">
      <div className="border-b-2 border-zinc-500 py-5 md:py-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl text-zinc-950 font-black tracking-tight">Treshr<span className="text-[#7bbb29] font-black">coupon</span></div>
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link href="/" className="text-lg text-zinc-800 font-semibold">
                  Coupons
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-zinc-800 font-semibold">
                  Stores
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-zinc-800 font-semibold">
                  Cashback
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-zinc-800 font-semibold">
                  Saving Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="text-lg text-zinc-800 font-semibold">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
