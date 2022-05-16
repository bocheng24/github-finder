import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className="navbar drop-shadow-xl py-3 flex flex-col items-center justify-around text-white space-y-8 bg-main">
        <Link to='/'>
            <div className="flex text-lg text-bold items-center space-x-3 hover:drop-shadow-xl">
                <FaGithub className='logo text-5xl text-bold' />
                {/* <div>GH Finder</div> */}
            </div>
        </Link>
        <div className="flex w-full flex-col items-center space-y-0 text-xl text-bold">
            <div className='w-full py-3 text-center hover:bg-sunny link'>
                <Link to="/">Home</Link>
            </div>
            <div className='w-full py-3 text-center hover:bg-sunny link'>
                <Link to="/about">
                    About
                </Link>
            </div>
        </div>
        <div></div>
        <div></div>
    </nav>
  )
}

export default Navbar
