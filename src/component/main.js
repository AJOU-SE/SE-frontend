import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>MAIN PAGE</h1>
      <p>호로로로로로로롤</p>
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
}

export default Main;