import React from 'react'
import {Link} from 'react-router-dom'

import { IoIosArrowRoundBack } from 'react-icons/io'
import { IoIosCart } from 'react-icons/io'
import Logo from './Logo'
import '../css/Header.css'
const Header = () =>{
    return(
        <nav className='nav'>
        <Link to="/">
            <IoIosArrowRoundBack className="back_icon"/>
        </Link>
        <Logo />
        <IoIosCart className="cart_icon"/>
        </nav>
    )
}
export default Header