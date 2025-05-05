//React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Pages
import HomeContent from './pages/Home';
import AboutContent from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';

//Navbar
import Navbar from './pages/Navbar';

import Dashboard from './pages/Dashboard';

function App() {
  return(
    <Router>
        <Navbar/>
        <Dashboard/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomeContent/>}/>
            <Route path="/about" element={<AboutContent/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App
