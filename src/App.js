import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './component/main';
import Login from './component/login';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const handleLogin = (id) => {
    setLoggedIn(true);
    setUserId(id);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserId('');
  };

  return (
    <UserContext.Provider value={{ loggedIn, userId, handleLogin, handleLogout }}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
