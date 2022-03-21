import React from 'react';
import Navigation from '../Navigation';

function Header({ pages }) {
    return(
        <header>
            {/* Site Title */}
            <div className="title">
                <h1><a href="./">Cole Codes</a></h1>
                <h2>Web. Graphic. Design.</h2>
            </div>
            {/* Site Navigation */}
            <Navigation pages={pages} />
        </header>
    );
}

export default Header;