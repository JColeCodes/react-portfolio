import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { projectInfo } from './assets/project-info';

function App() {
  const projects = projectInfo;
  return (
    <div className="container">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="content">
        <About />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
