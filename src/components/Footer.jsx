import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="text-black pt-5 mt-16 border-t border-gray-300">
        <div className="flex flex-col md:flex-row items-start md:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 md:space-y-0">
            
            {/* Logo */}
            <Link to={'/'} className="flex items-center ml-[-15px]">
                <img className="w-16 sm:w-20" src="/logo.png" alt="logo" />
                <h1 className="text-primary font-bold text-xl">DeepSightX</h1>
            </Link>

            {/* Quick Links */}
            <div className="w-full md:w-auto">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <ul className="mt-2 space-y-2">
                    <li><Link to={'/'} className="hover:text-primary">Home</Link></li>
                    <li><Link to={"/diseases"} className="hover:text-primary">Diseases</Link></li>
                    <li><Link to={"/hospitals/1"} className="hover:text-primary">Hospitals</Link></li>
                    <li><Link to={"/about"} className="hover:text-primary">About</Link></li>
                </ul>
            </div>

            {/* About Section */}
            <div className="w-full md:w-[330px]">
                <h2 className="text-lg font-semibold">About Us</h2>
                <p className="text-sm mt-2">Advancing eye care with AI-powered imaging to detect retinal and neurodegenerative diseases early.</p>
            </div>

        </div>

        <div className="mt-6 text-center text-sm py-4 border-t border-gray-300">
            © 2025 DeepSightX | All Rights Reserved
        </div>
    </footer>
  

  )
}

export default Footer