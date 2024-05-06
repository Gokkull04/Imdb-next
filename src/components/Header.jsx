import React from 'react'
import MenuItem from './Menuitem'
import { IoMdHome } from "react-icons/io";
import {BsFillInfoCircleFill} from "react-icons/bs"
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between mx-auto items-center p-3 max-w-6xl'>
      <div className='flex gap-4 font-semibold'>
        <MenuItem title="home" address="/" Icon={IoMdHome}/>
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}/>
      </div>
      <div>
      <Link href="/" className='flex items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
        <span className='text-xl hidden sm:inline font-semibold'>Clone</span>
      </Link>
      </div>
    </div>
  )
}
