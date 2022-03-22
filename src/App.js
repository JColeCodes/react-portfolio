import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

import { projectInfo } from './assets/project-info';

function Template() {
  const pages = [
    { path: '/', title: 'About', Element: About },
    { path: '/portfolio', title: 'Portfolio', Element: Portfolio },
    { path: '/contact', title: 'Contact', Element: Resume },
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
              classNames="slide"
              timeout={800}
            >
              <Routes location={location}>
                {pages.map(({path, title, Element}) => (
                  <Route
                    key={title}
                    path={path}
                    element={<Element projects={projectInfo} title={title} />}
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

function App() {
  return (
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  );
}

export default App;
