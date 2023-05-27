import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from './signIn';
import { UserContext } from '../App';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 폼 데이터를 처리 및 로그인 요청
    // console.log('ID:', id);
    // console.log('Password:', password);

    if (id.trim()===''){
        setMessage('Please enter your ID');
        return;
    }

    try{
        const user=signIn({id,password});
        console.log('logged in user : ', user.id);
        // 로그인 된 후 처리 
        handleLogin(id);
        navigate('/');
    }catch(error){
        console.log('login failed');
        // 잘못된 로그인 처리
        if (error.message === 'Invalid ID') {
            setMessage('Nonexist ID'); // Set invalid ID message
          } else if (error.message === 'Invalid password') {
            setMessage('Invalid password'); // Set invalid password message
          } else {
            setMessage('Login failed'); // Set generic login failed message
          }
    }
  };

  return (
    <div>
    <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">&nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;ID&nbsp; &nbsp; &nbsp;&nbsp;</label>
          <input type="text" id="id" value={id} onChange={handleIdChange} />
        </div>
        <div>
          <label htmlFor="password"> &nbsp;Password </label>
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
