import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import { projectInfo } from './assets/project-info';

function Template() {
  const pages = [
    { path: '/', title: 'About', Element: About },
    { path: '/portfolio', title: 'Portfolio', Element: Portfolio },
    { path: '/contact', title: 'Contact', Element: Contact },
    { path: '/resume', title: 'Resume', Element: Resume }
  ];
  const location = useLocation();
  
  return(
    <div className="container">
      {/* Header */}
      <Header pages={pages} />

      {/* Content */}
      <div className="content">
          <TransitionGroup component={null}>
            <CSSTransition
              key={location.key}
              classNames={'slide'}
              timeout={800}
            >
              <Routes location={location}>
                {pages.map(({path, title, Element}) => (
                  <Route
                    key={title}
                    path={path}
                    element={
                      <div className="wide">
                      <Element projects={projectInfo} title={title} />
                      </div>
                    }
                  />
              ))}
              </Routes>
            </CSSTransition>
          </TransitionGroup>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function delayTransition() {
  const classes = document.body.classList;
  let timer = 0;
  function delay() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    else
        classes.add('stop-transitions');

    timer = setTimeout(() => {
        classes.remove('stop-transitions');
        timer = null;
    }, 10);
  }
  window.addEventListener('resize', delay);
  window.onload = delay();
}

function App() {
  return (
    <BrowserRouter>
      <Template />
      {delayTransition()}
    </BrowserRouter>
  );
}

export default App;
