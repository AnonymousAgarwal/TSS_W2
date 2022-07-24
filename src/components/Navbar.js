import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <a href="/" className="site-title">
            PG
        </a>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/music'>Music</a>
            </li>
            <li>
                <a href='/tech'>Tech</a>
            </li>
            <li>
                <a href='/sports'>Sports</a>
            </li>
            <li>
                <a href='/contact'>Contact Us</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar