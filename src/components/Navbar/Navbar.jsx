import React from 'react'
import { Link } from "react-router-dom";
import { FaGithub } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Menu from './Menu';

function Navbar() {

    const menus = [
        {
            route: '/',
            icon: <AiOutlineHome />,
            text: 'Home'
        },

        {
            route: '/about',
            icon: <AiOutlineExclamationCircle />,
            text: 'About'
        },
    ]
    return (
    <nav className="navbar drop-shadow-xl py-3 flex flex-col items-center justify-around text-white text-bold space-y-8 bg-main">
        <Link to='/'>
            <div className="flex text-lg text-bold items-center space-x-3 hover:drop-shadow-xl">
                <FaGithub className='logo text-5xl text-bold' />
                {/* <div>GH Finder</div> */}
            </div>
        </Link>
        <div className="flex w-full flex-col items-center space-y-0 text-xl text-bold">
            {
                menus.map((menu, idx) => <Menu key={ idx } route={ menu.route } icon={ menu.icon } text={ menu.text } />)
            }
        </div>
        <div></div>
        <div></div>
    </nav>
    )
}

export default Navbar
