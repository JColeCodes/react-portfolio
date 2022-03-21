import React from 'react';

function isActive(path, title) {
    if (window.location.pathname === path) {
        return <li key={title}><a href={path} className="active">{title}</a></li>
    } else {
        return <li key={title}><a href={path}>{title}</a></li>
    }
}

function Navigation({ pages }) {
    return(
        <nav>
            <ul>
                {pages.map(page => (
                    isActive(page.path, page.title)
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;