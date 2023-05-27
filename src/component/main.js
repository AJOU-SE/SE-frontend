import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

function Main() {
  const { loggedIn, userId, handleLogout } = useContext(UserContext);

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>{userId}님, 안녕하세요!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Welcome to the Main Page</h2>
          <Link to="/login">Go to Login Page</Link>
        </div>
      )}
    </div>
  );
}

export default Main;
