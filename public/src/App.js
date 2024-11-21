
import './App.scss';
import ParticlesComponents from './components/particles';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import Home from './Containers/home';
import About from './Containers/about';
import Resume from './Containers/resume';
import Skill from './Containers/skills';
import Portfolio from './Containers/portfolio';
import Contact  from './Containers/contact'; 

function App() {
  return (
    <div className="App">
      <ParticlesComponents id="particles" />
      
        <Navbar />
        <div className="App__main-page-content">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
     
    </div>
  );
}

export default App;
