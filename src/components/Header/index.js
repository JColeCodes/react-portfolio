import React from 'react';
import Navigation from '../Navigation';

function Header() {
    return(
        <header>
            {/* Site Title */}
            <div className="title">
                <h1><a href="./">Cole Codes</a></h1>
                <h2>Web. Graphic. Design.</h2>
            </div>
            {/* Site Navigation */}
            <Navigation />
        </header>
    );
}

export default Header;