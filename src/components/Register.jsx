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
        padding: 10px;  
        width: 300px;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    button{
        margin:20px;
        color: black;
        background-color: #7cf899;
        border: 2px solid black;
        border-radius: 8px; 
        padding: 10px;  
        width: 100px;
    }
`

const TriblinLogo = styled.div`
    display: flex;
    justify-content: flex-start;;
    background: linear-gradient(to right, rgb(27, 42, 159), #145c26);
    font-family: Georgia, 'Times New Roman', Times, serif;
    background-clip: text;
    display: inline-block;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    font-weight: 1000;
`

const Logincontainer=styled.div`
    margin-top: 10px;
    border-radius: 10px;
    height: 30vh;
`

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const response = await fetch('https://triblinbackend-production.up.railway.app/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      console.log(response);
      const data = await response.json();
      
      if (!response.ok) {
        const errorMessage = Object.values(data).flat().join(' ');
        throw new Error(errorMessage || 'Registration failed');
      }
      
      loginuser(data.user, data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='login'>
            <TriblinLogo>
                Signin
            </TriblinLogo>
            <Logincontainer className="login_container" >
                <Loginform className='login-form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' value={username} onChange={(e) =>{
                        setUsername(e.target.value)
                    }}/>
                    <input type="text" placeholder='Email' value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Buttons>
                        <button type="submit" onClick={()=>navigate('/register')}>Sign Up</button>
                    </Buttons>
                </Loginform>
            </Logincontainer>
      </div>
  );
}

export default Register;