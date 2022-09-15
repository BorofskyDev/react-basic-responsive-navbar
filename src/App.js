import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route path="/about" component={<About />} exact />
          <Route path="/skills" component={<Skills />} exact />
          <Route path="/contact" component={<Contact />} exact />
          <Route path="/signup" component={<Signup />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
