import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const history = useNavigate();
    return (
        <footer>
            <div className="foot-info">
                <div className="socials">
                    <a href="https://www.linkedin.com/in/jennifer-cole-a9506b163/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/JColeCodes" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/capauldi/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                </div>
                <ul>
                    <li>ColeCodes.com &copy; 2017-{new Date().getFullYear()}</li>
                    <li>
                        <button onClick={() => history(-1)}>
                            <i className="fa-solid fa-angles-left"></i> Previous Page
                        </button>
                    </li>
                    <li>
                        <button onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}>
                            <i className="fa-solid fa-arrow-up"></i> Top of Page
                        </button>
                    </li>
                </ul>
            </div>
      </footer>
    );
}

export default Footer;