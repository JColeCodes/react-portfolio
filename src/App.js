import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { projectInfo } from './assets/project-info';

function App() {
  const pages = [
    { path: '/', page: 'about', title: 'About' },
    { path: '/portfolio', page: 'portfolio', title: 'Portfolio' },
  ];
  return (
    <div className="container">
      {/* Header */}
      <Header pages={pages} />

      {/* Content */}
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio projects={projectInfo} page_title={pages[1].title} />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
