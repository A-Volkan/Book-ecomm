import React, { useState } from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import { navLinks, navRight } from '../../Data/Data'

import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr'

const Nav = () => {
    // use state for navbar 
    const [isNavLinkShowing, setIsNavLinkShowing] = useState(false);


    if (innerWidth < 1024) {
        window.addEventListener('scroll', () => {
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false)
        })
    }
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.remove('navShadow', window.scrollY > 0 ? 'navShadow' : '');
    })





    return (
        <nav>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" />

                </Link>

                <ul className={`nav-links ${isNavLinkShowing ? 'navLinksShow' : 'navLinksHide'}`}>
                    {
                        navLinks.map(({ name, path }, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => {
                            return (

                                <Link key={index}
                                    className='management-icons' to={item.link} >
                                    <item.icon />
                                </Link>

                            )
                        })
                    }

                    <button className="menu-button" onClick={() => setIsNavLinkShowing(!isNavLinkShowing)}>
                        {!isNavLinkShowing ? <VscMenu /> : <GrClose />}
                    </button>

                </div>

            </div>
        </nav>
    )
}

export default Nav