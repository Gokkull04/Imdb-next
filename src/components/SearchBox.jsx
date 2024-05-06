'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
    const [search, setSearch] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <form className='flex justify-between px-5 max-w-6xl mx-auto'>
        <input type='text' placeholder='Search Key' className='w-full h-14 rounded-md placeholder-gray-500 bg-transparent flex-1 outline-none'
         value={search} onChange={(e) => setSearch(e.target.value)} onSubmit={handleSubmit}/>
        <button className='disabled:text-gray-500' disabled={!search}>Search</button>
    </form>
  )
}
