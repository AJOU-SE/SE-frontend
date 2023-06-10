import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 여기에서 폼 데이터를 처리 및 로그인 요청
    // console.log('ID:', id);
    // console.log('Password:', password);

    if (email.trim()===''){
        setMessage('Please enter your email');
        return;
    }

    try{
        const response=await axios.post('/member/login',{
          email: email,
          password: password
        });
        
        if (response.status===200){
          const user=response.data;
          console.log('user email: ',user.email);
          handleLogin(user.email);
          navigate('/');
        }else {
          throw new Error('Login Failed');
        }
        
    }catch(error){
        console.log('Login Failed_aaa');
        if (error.response) {
            if (error.response.status===401){
              setMessage('Nonexist email or password'); 
            }else {
            setMessage('Login Failed'); 
            console.log('bbb');
          } 
        }else {
          setMessage('Login Failed'); 
          console.log('ccc');
        }
    }
  };

  return (
    <div>
    <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">&nbsp;  &nbsp;e-mail&nbsp; &nbsp;&nbsp;</label>
          <input type="text" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password"> &nbsp;password </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
      </form>
      <p style={{ color: 'red', fontWeight: 'bold', fontSize: 'smaller' }}> {message} </p>
      <br />
      <Link to="/">Go back to Main</Link>
    </div>
  );
}

export default Login;
