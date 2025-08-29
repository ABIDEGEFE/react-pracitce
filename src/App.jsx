import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Post from './pages/Post.jsx'
import Nav from './components/Nav.jsx'
import Users from './pages/Users.jsx'

function App() {

  return (

    <Router className="Router">
      <Nav></Nav>
      <div>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<Users />} />
        </Routes>

      </div>
    </Router>
    
  )
}

export default App
