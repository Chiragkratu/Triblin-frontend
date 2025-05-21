import { useState, useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../styles/Navbar.css'
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PopupModal from './popupmodel';
import Login from './Login';
import Register from './Register';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [register,setregister]=useState(false);

  const {user,logoutuser,login,setlogin} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setlogin(false);
    logoutuser();
    navigate('/');
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24}/> : <Menu size={24} />}
        </div>

        <Link to="/" className="navbar-logo">
          Triblin
        </Link>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/how-it-works" className="nav-link" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-link" onClick={() => setIsOpen(false)}>
              Offset Your Event
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/offset-projects" className="nav-link" onClick={() => setIsOpen(false)}>
              Offset Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
              About Triblin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
              Contact / Get a Quote
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
              Coming Soon
            </Link>
          </li>
          
        </ul>
        {(!user)?

           <> <button id='loginbutton' style={{'background-color':'#7cf899', color:'black'}} onClick={()=>{
                setlogin(true);
                setregister(false);
            }}>Login</button>

          <PopupModal isOpen={login} onClose={() => setlogin(false)}>
            <Login/>
            <a onClick={()=>{
                setlogin(false);
                setregister(true);
            }}>New user? Register now</a>
          </PopupModal>

          <PopupModal isOpen={register} onClose={() => setregister(false)}>
            <Register/>
            <a onClick={()=>{
                setlogin(true);
                setregister(false);                
            }}>Existing User? Login Now</a>
          </PopupModal>
          </>:<>
            <button id='loginbutton' style={{'background-color':'#7cf899', color:'black'}} onClick={handleLogout}>Logout</button>
          </>
      }
          
      </div>
      
    </nav>
  );
};

export default Navbar;
