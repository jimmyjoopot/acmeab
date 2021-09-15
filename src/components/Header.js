import React from 'react';
import Logo from "../assets/logo.png";

function Header() {
    return (
        <header>            
            <img src={Logo} alt="logo"/>
            <h1>ACME AB</h1>
            <nav>
                <ul>
                    <li><a href='#Contact'>Kontakta oss</a></li>
                    <li><a href='#References'>Referenser</a></li>
                    <li><a href='#About'>Om oss</a></li>
                </ul>
            </nav>       
        </header>
    )
}

export default Header
