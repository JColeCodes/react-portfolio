import React from 'react';
import { NavLink } from 'react-router-dom';

function isActive(path) {
    if (window.location.pathname === path) {
        return "active";
    }
    return "";
}

function Navigation({ pages }) {
    return(
        <nav>
            <ul>
                {pages.map(({title, path}) => (
                    <li key={title}><NavLink key={title} to={path} className={isActive(path)}>{title}</NavLink></li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;