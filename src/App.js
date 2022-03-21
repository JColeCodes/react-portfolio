import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import { projectInfo } from './assets/project-info';

function App() {
  const pages = [
    { path: '/', page: 'about', title: 'About' },
    { path: '/portfolio', page: 'portfolio', title: 'Portfolio' },
    { path: '/contact', page: 'contact', title: 'Contact' },
    { path: '/resume', page: 'resume', title: 'Resume' }
  ];
  return (
    <div className="container">
      <BrowserRouter>
        {/* Header */}
        <Header pages={pages} />

        {/* Content */}
        <div className="content">
          <Routes>
            <Route path={pages[0].path} element={<About />} />
            <Route path={pages[1].path} element={<Portfolio projects={projectInfo} page_title={pages[1].title} />} />
            <Route path={pages[3].path} element={<Resume page_title={pages[3].title} />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
