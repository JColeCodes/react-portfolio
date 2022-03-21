import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { projectInfo } from './assets/project-info';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="content">
        <About />
        <Portfolio projects={projectInfo} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
