"use client"
import React, { useState } from 'react';

const Navbar = () => {
    const [mob, setmob] = useState(false)
  return (
    <>
    <header className='h-16 p-4 flex justify-between items-center'>
        <h1 className='text-xl text-red-400 font-bold '>Gaming Arena</h1>
        {!mob ? (
            <button className='md:hidden text-lg' onClick={() => setmob(true)} title='open'><i className="ri-menu-line"></i></button>
        ): (
            <button onClick={() => setmob(false)} className='font-medium md:hidden' title='close'><i className="ri-close-line"></i></button>
        )}
        <div className='hidden md:flex justify-between items-center gap-5'>
            <ul className='flex justify-between items-center gap-5'>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='/'>Home</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='/about'>About</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='#'>Services</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='#'>Work</a></li>
            </ul>
            <button className='px-4 py-2 bg-red-400 rounded-md border-2 border-black font-medium hover:bg-gray-600 hover:text-white ease-in-out duration-700'>Contact</button>
        </div>
    </header>
    {mob && (
        <div className='text-black absolute top-1/3 left-[38%] backdrop-blur-md bg-transparent flex flex-col justify-between items-center gap-5 md:hidden'>
            <ul className='flex flex-col justify-between items-center gap-5'>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='/'>Home</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='/about'>About</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='#'>Services</a></li>
                <li className='text-md font-semibold hover:text-red-300 ease-in-out duration-500'><a href='#'>Work</a></li>
            </ul>
            <button className='px-4 py-2 bg-red-400 rounded-md border-2 border-black font-medium hover:bg-gray-600 hover:text-white ease-in-out duration-700'>Contact</button>
        </div>
    )}
    </>
  )
}

export default Navbar
