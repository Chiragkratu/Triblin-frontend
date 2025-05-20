import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Loginform = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin:5px;
        color: black;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px; 
        padding: 20px;  
        width: 300px;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    button{
        margin:20px;
        color: white;
        background-color: black;
        border: none;
        border-radius: 5px; 
        padding: 10px;  
        width: 100px;
    }
`

const TriblinLogo = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    background: linear-gradient(to right, rgb(27, 42, 159), #145c26);
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-clip: text;
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-size: 60px;
    font-weight: 1000;
`

const Logincontainer=styled.div`
    margin-top: 100px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 100px 600px;
    height: 60vh;
    padding: 20px;
    
`

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }
      
      login(data.user, data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login'>
            <TriblinLogo>
                Triblin
            </TriblinLogo>
            <Logincontainer className="login_container" >
                <h1>Login</h1>
                <Loginform className='login-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' value={username} onChange={(e) =>{
                        setUsername(e.target.value)
                    }}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Buttons>
                        <button type="submit" onClick={()=>navigate('/login')}>Login</button>
                        <button type="submit" onClick={()=>navigate('/register')}>Sign Up</button>
                    </Buttons>
                </Loginform>
            </Logincontainer>
        </div>
  );
}

export default Login;