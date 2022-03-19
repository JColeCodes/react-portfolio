import React from 'react';

function Navigation() {
    return(
        <nav>
            <ul>
                <li><span className="active">About</span></li>
                <li><span>Portfolio</span></li>
                <li><span>Contact</span></li>
                <li><span>Resume</span></li>
            </ul>
        </nav>
    );
}

export default Navigation;