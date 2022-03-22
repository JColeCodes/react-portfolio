import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation';

function Header({ pages }) {
    return(
        <header>
            {/* Site Title */}
            <div className="title">
                <h1>{window.location.pathname === "/" ?
                    "Cole Codes" :
                    <NavLink to="/">Cole Codes</NavLink>}
                </h1>
                <h2>Web. Graphic. Design.</h2>
            </div>
            {/* Site Navigation */}
            <Navigation pages={pages} />
        </header>
    );
}

export default Header;