import React from 'react'
import './Nav.css'
import '../../App.css'
import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import { navLinks, navRight } from '../../Data/Data'

import { VscMenu } from 'react-icons/vsc';
import { GrClose } from 'react-icons/gr'

const Nav = () => {
    return (
        <nav>
            <div className="container nav-container">
                <Link to="/" className="logo"><img src={Logo} alt="logo" /></Link>
            </div>
            <ul className="nav-links">
                {
                    navLinks.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="nav-right">
                {
                    navRight.managements.map((item, index) => {
                        return (

                            <Link key={index} target='_blank'
                                className='management-icons' to={item.link} >
                                <item.icon />
                            </Link>

                        )
                    })
                }
                <div className="menu-bar">
                    <button className="menu-button btn btn-border">
                        <VscMenu />
                        <GrClose />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav