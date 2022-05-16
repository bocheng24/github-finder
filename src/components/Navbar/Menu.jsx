import React from 'react'
import { Link } from "react-router-dom";

function Menu({ route, icon, text }) {
  return (
    <div className='w-full py-3 px-10 text-center hover:bg-cherry link flex items-center justify-start space-x-5'>
        <Link to={ route }>
            <div className="flex items-center justify-content space-x-5">
                { icon }
                <p>{ text }</p>
            </div>
        </Link>
    </div>
  )
}

export default Menu