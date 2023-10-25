import React, { useState } from 'react'
import {AiOutlineAlignCenter, AiOutlineClose} from "react-icons/ai"
import Nav from './Nav'
import menu from '../list'
import {Link} from "react-router-dom"


const Navbar = () => {

    const[nav,setNav] = useState(false)
    const[display,setDisplay] = useState(false)

    function mouseIn(){
        setDisplay(false)
    }
    function mouseOut(){
        setDisplay(true)
    }

  return (
    <div>
        <nav className='flex justify-between items-center py-7 px-12 text-white bg-cyan-600'>
            <button>PASTRIES</button>
            <ul className='hidden lg:flex gap-x-7'>
                {
                    menu.map((items,id)=>{
                        return(
                            <li key={id}>{items.name}</li>
                        )
                    })
                }
            </ul>
            <div onMouseEnter={mouseIn} onMouseLeave={mouseOut} className='lg:hidden flex gap-x-3'>
                {
                    display?
                    <AiOutlineAlignCenter size={32}/>
                    :
                    <AiOutlineClose size={32}/>
                }
            </div>
        </nav>

        <div className={
            !display?
            'flex flex-col h-screen text-white text-center gap-y-10 py-10 bg-cyan-600'
            :
            "hidden"
            }>
            <Link to= "/" >HOME</Link>
            <Link to= "/drizzy">ABOUT</Link>
            <div>CONTACT</div>
            <div>PORTFOLIO</div>
        </div>
    </div>
  )
}

export default Navbar