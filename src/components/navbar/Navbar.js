import React from 'react'
import logo from '../../logo.svg';
import './Navbar.css'

function Navbar() {
    return (
        <header className="bg-slate-900 text-white py-2">
            <div className="navbar flex flex-row ml-auto mr-auto">
                <div className="logo w-1/2 flex flex-row align-middle items-center">
                    <img className="w-16" src={logo} /> <span className="font-semibold text-2xl">React Login</span>
                </div>

                <div className="flex flex-row items-center nav-menu justify-end w-1/2">
                    <nav>
                        <ul className="flex flex-row items-center">
                            <li className="ml-7"><a href="">Home</a></li>
                            <li className="ml-7"><a href="">About</a></li>
                            <li className="ml-7"><a href="">Login</a></li>
                            <li className="ml-7 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-7 py-2"><a href="">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Navbar