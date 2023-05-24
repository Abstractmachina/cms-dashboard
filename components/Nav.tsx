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

  const fullMenuClasses = "";
  return (
    <nav className= {`text-white bg-black fixed bottom-0 left-0 z-10 flex flex-row justify-between items-center h-16 px-4 rounded-full m-4 ${ showFull ? 'w-[calc(100%-2rem)]' : ''}`}>
        <button className=' bg-slate-500' onClick={toggleShowFull}>
            <Image src="/assets/menu_hamburger.svg" alt="toggle menu" width={30} height={30}/>
        </button>

        {showFull ? (
            <div className='flex flex-grow flex-row items-center justify-between ml-16'>
                <Link href="/newPost">
                    <Image src="/assets/plus_slim.svg" width={37} height={37} alt="create new post"/>
                </Link>
                <Link href="/">
                    Home
                </Link>
                <Link href="/posts">
                    Posts
                </Link>
                <Link href="/analytics">
                    Analytics
                </Link>
                
                <Link href="/profile">
                    <Image 
                    src="/assets/user1.svg"
                    width={37} height={37}
                    className="rounded-full"
                    alt="profile"
                    />
                </Link>
                
            </div>
        ) :
        (<></>)}
        
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