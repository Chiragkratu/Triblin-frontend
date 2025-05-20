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

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      <Router>
        <div className="app">
          {(user) && <Navbar />}
          <main className="container mt-4">
            <Routes>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/home" />} />
              <Route path="/register" element={!user ? <Register /> : <Navigate to="/home" />} />
              <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
              <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
              <Route path="/how-it-works" element={user? <Working/>: <Navigate to="/login" />}/>
              <Route path="/calculator" element={user? <Final_CTA/>: <Navigate to="/login" />}/>
              <Route path="/offset-projects" element={user? <OffsetProjects/>: <Navigate to="/login" />}/>
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;