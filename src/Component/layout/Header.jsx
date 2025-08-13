import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    const toggleFunc = () => {
        setToggle(!toggle);
    }
    const nav_style = toggle ? 'mob-menue' : 'desktop-menue';
    return (
        <header className={`header-img container-fluid`}>
            <div className="header flex container">
                <div className='nav-logo'>
                    <img src="public\img\imgi_1_logo-CMLzTNjw.svg" alt="" />
                </div>
                <nav className='nav-bar'>
                    <ul className={`flex nav-list ${nav_style}`}>
                        <li className='nav-item'>
                            <a className='nav-link nav-item-btn' href="#">Seller Dashboard</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">All Product</a>
                        </li>
                        <li className='nav-item nav-input-box'>
                            <input type="text" className='nav-input' placeholder='Search product' />
                            <IoSearch className='nav-search-icon' />

                        </li>
                        <li className='nav-item'>
                            <GiShoppingCart className='cart-icon' />
                        </li>
                        <li className='nav-item'>
                            <button className='nav-login-btn btn'>Login</button>
                        </li>
                    </ul>
                </nav>
                {toggle ? <IoMdClose onClick={toggleFunc} className='mob-nav'/> : <FaBarsStaggered onClick={toggleFunc} className='mob-nav' />}
            </div>
        </header>
    )
}
