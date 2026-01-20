import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Badge from './components/Badge';

function App() {
  return (
    <Router>
      <div className="h-screen w-full flex flex-col ">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/badge" element={<Badge />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
