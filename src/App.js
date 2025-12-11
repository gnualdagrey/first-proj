import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Login from './components/Login'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './components/Create';
function App() {
  return (
    <Router>
      <Routes>
        {/* LOGIN PAGE ONLY */}
        <Route path="/" element={<Login />} />
        <Route path="/create" element={< Create/>} />

        {/* PAGES WITH NAVBAR */}
        <Route 
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;