'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



interface NavProps {
  toggleContextMenu : () => void;
}

const Nav = () => {

  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    if (showFull) setShowFull(false);
    else setShowFull(true);
  }

  return (
    <nav className='text-white bg-black fixed bottom-0 left-0 w-full z-10 flex flex-row justify-between items-center h-16 px-4'>
        <button className='' onClick={toggleShowFull}><Image src="/assets/menu_hamburger.svg" alt="toggle menu" width={30} height={30}/></button>

        <Link href="/profile">
              <Image 
                src="/assets/user1.svg"
                width={37} height={37}
                className="rounded-full"
                alt="profile"
              />
        </Link>
    </nav>
  )
}


// master admin view
// users
// 


// admin view
// posts
// assets? 
// analytics
// settings


export default Nav