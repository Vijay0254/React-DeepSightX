import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [visible, setvisible] = useState(false)

  return (
    <header className='flex ml-[-14px] lg:ml-0 items-center justify-between py-1'>
        {/* Logo */}
        <Link to={'/'} className='flex items-center'>
            <img className='sm:w-20 w-14' src="/logo.png" alt="logo" />
            <h1 className='sm:text-xl text-primary font-bold'>DeepSightX</h1>
        </Link>

        {/* Navigation Links */}
        <div className='lg:flex hidden items-center gap-x-14 text-gray-600 font-medium rounded-2xl uppercase px-7 py-2.5'>
            <NavLink to="/" className={(({isActive}) => isActive ? "border-b-2 py-1 text-primary" : `py-1`)}>Home</NavLink>
            <NavLink to="/diseases" className={(({isActive}) => isActive ? "border-b-2 py-1 text-primary" : `py-1`)}>Diseases</NavLink>
            <NavLink to="/hospitals/1" className={(({isActive}) => isActive ? "border-b-2 py-1 text-primary" : `py-1`)}>Hospitals</NavLink>
            <NavLink to="/about" className={(({isActive}) => isActive ? "border-b-2 py-1 text-primary" : `py-1`)}>About</NavLink>
        </div>

        {/* Menu Icon */}
        <Menu onClick={() =>setvisible(!visible)} className='lg:hidden text-gray-600 size-7 cursor-pointer' />

        {/* Sidebar Menu for Mobile */}
        <nav className={`fixed z-50 lg:hidden sm:pl-10 sm:pr-5 transition-transform duration-300 ease-in-out left-0 top-0 bottom-0 w-[55%] sm:w-[50%] bg-white shadow-xl shadow-slate-700 ${visible ? "translate-x-0" : "-translate-x-full"}`}>
            <X onClick={() =>setvisible(!visible)} className='absolute right-4 cursor-pointer md:text-3xl top-10 text-gray-600 text-2xl ' />
            <div className='flex text-gray-600 flex-col items-end text-end gap-y-8 mt-24 md:pl-44 md:text-xl md:pr-16 px-10'>
                <NavLink onClick={() =>setvisible(!visible)} to='/' className={(({isActive}) => isActive ? "border-b-2 w-32 py-2 text-primary uppercase font-medium sm:text-lg" : `py-1 uppercase font-medium sm:text-lg`)}>Home</NavLink>
                <NavLink onClick={() =>setvisible(!visible)} to='/diseases' className={(({isActive}) => isActive ? "border-b-2 w-32 py-2 text-primary uppercase font-medium sm:text-lg" : `py-1 uppercase font-medium sm:text-lg`)}>Diseases</NavLink>
                <NavLink onClick={() =>setvisible(!visible)} to='/hospitals/1' className={(({isActive}) => isActive ? "border-b-2 w-32 py-2 text-primary uppercase font-medium sm:text-lg" : `py-1 uppercase font-medium sm:text-lg`)}>Hospitals</NavLink>
                <NavLink onClick={() =>setvisible(!visible)} to='/about' className={(({isActive}) => isActive ? "border-b-2 w-32 py-2 text-primary uppercase font-medium sm:text-lg" : `py-1 uppercase font-medium sm:text-lg`)}>About</NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Navbar