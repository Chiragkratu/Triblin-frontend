import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/pages/home';
import Navbar from './components/Navbar';
import AuthContext from './context/AuthContext';
import Working from './components/pages/working';
import Footer from './components/pages/Footer';
import OffsetProjects from './components/pages/offsets_projects';
import Final_CTA from './components/pages/Final_CTA';


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const [login,setlogin]=useState(false);

  useEffect(() => {
    // Check if user is logged in on component mount
    const checkAuth = async () => {
      if (token) {
        try {
          const response = await fetch('https://triblinbackend-production.up.railway.app/api/user/', {
            headers: {
              'Authorization': `Token ${token}`
            }
          });
          
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            // Token invalid, clear storage
            localStorage.removeItem('token');
            setToken(null);
          }
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, [token]);

  const loginuser = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutuser = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, token, loginuser, logoutuser, login,setlogin }}>
      <Router>
        <div className="app">
          <Navbar />
          <main className="container mt-4">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/how-it-works" element={<Working/>}/>
              <Route path="/calculator" element={<Final_CTA/>}/>
              <Route path="/offset-projects" element={<OffsetProjects/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;