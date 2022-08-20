import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Map from './Map';
import Tutorial from './Tutorial';
import Quiz from './Quiz';
import LogIn from './LogIn';
import SignUp from './SignUp';


function App() {
  const [user, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/me')
      .then((res) => {
       if (res.ok) {
          res.json()
            .then((currentUser) => {
              setCurrentUser(currentUser);})
          {
          fetch("/users")
            .then((r) => r.json())
            .then((users) => setUsers(users));
          }
        } else if (res.status == 401){
          <LogIn />
    }});
  }, []);

  const handleUpdateUser = (currentUser) => {
    setCurrentUser(currentUser)
  }
 
  return (
    <Router>
      <div>
        <nav>
          <div className='link'>
              <Link to="/" style={{ 
                textDecoration: 'none',
                color: '#040738',  
                }}>Home</Link>
          </div>
          <div className='link'>
              <Link to="/Map" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>Map</Link>
          </div>
          <div className='link'>
              <Link to="/Tutorial" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>Tutorial</Link>
          </div>
          <div className='link'>
              <Link to="/Quiz" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>Quiz</Link>
          </div>
          <div className='link'>
              <Link to="/LogIn" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>Log In</Link>
          </div>
          
        </nav>

        <Routes>
          <Route path="/Map" element={<Map />}></Route>
          <Route path="/Tutorial" element={<Tutorial />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
