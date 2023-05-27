import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에서 폼 데이터를 처리하거나 로그인 요청을 보낼 수 있습니다.
    console.log('ID:', id);
    console.log('Password:', password);
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
      <br />
      <Link to="/">Go back to Main</Link>
    </div>
  );
}

export default Login;
