import React from 'react';
import { NavLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Navigation from '../Navigation';

function Header({ pages }) {
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let lightAmount = [];
    async function createLights() {
        for (let i = 0; i < randomNum(80, 120); i++) {
            lightAmount.push(i);
        }
    }
    if (window.innerWidth > 740) {
        createLights();
    }
    
    return(
        <header>
            <div id="small-lights">{lightAmount.map((light, i) => (
                <div className="small-light" key={`light-${i}`}
                    style={{
                        top: randomNum(0, 100) + 'vh',
                        left: randomNum(0, 100) + '%',
                        fontSize: randomNum(18, 40) + 'px'
                    }}>.</div>
            ))}</div>
            {/* Site Title */}
            <div className="title">
                <h1>{window.location.pathname === "/" ?
                    "Cole Codes" :
                    <NavLink to="/">Cole Codes</NavLink>}
                </h1>
                <h2>
                    <Typewriter 
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Jennifer Cole.')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('Web. Graphic. Design.')
                                .pauseFor(3000)
                                .deleteAll()
                                .start();
                        }}
                    />
                </h2>
            </div>
            {/* Site Navigation */}
            <Navigation pages={pages} />
        </header>
    );
}

export default Header;