import "../style/header.css";
import React from 'react'

const Header = () => {
  return (
    <div className="header">

        <div className="left">
            <h1 className="pic">Classy1One</h1>
        </div>
        
            <div className="right">
                <ul className="links">
                    <li>
                        <a className="line" href="/">Home</a>
                    </li>
                    <li>
                        <a className="line" href="/about">About</a>
                    </li>
                    <li>
                        <a className="line" href="/contact">Contact US</a>
                    </li>
                </ul>
            </div>
    
    </div>
  )
}

export default Header