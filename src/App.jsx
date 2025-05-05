import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeContent from './pages/Home';
//Embedding expressions
import AboutContent from './pages/About'
//Class based components
import Contact from './pages/Contact';

//Navbar
import Navbar from './pages/Navbar';

import Dashboard from './pages/Dashboard';

function App() {
  //let Component
  //switch (window.location.pathname) {
  //  case "/":
  //    Component = HomeContent
  //    break
  //  case "/aboutme":
  //    Component = QuestionContent
  //    break
  //  case "/contactme":
  //    Component = ReachOut
  //    break
  //}
  return(
    <Router>
        <Navbar/>
        <Dashboard/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomeContent/>}/>
            <Route path="/aboutme" element={<AboutContent/>}/>
            <Route path="/contactme" element={<Contact/>}/>
          </Routes>
        </div>
    </Router>
  )
}

export default App
