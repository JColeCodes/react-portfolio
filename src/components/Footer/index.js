import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="foot-info">
                <ul>
                    <li>ColeCodes.com &copy; 2017-{new Date().getFullYear()}</li>
                    <li><a href="#">&laquo; Previous Page</a></li>
                    <li><a href="#">&uarr; Top of Page</a></li>
                </ul>
            </div>
      </footer>
    );
}

export default Footer;