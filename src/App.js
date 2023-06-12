import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import { createBrowserHistory } from "history";
import Layout from "./component/Layout";

import Main from "./page/Main";
import Login from "./page/member/Login";
import Register from "./page/member/Register";
import UserProfile from "./page/mypage/UserProfile";
import UserEdit from "./page/mypage/UserEdit";
import UserWithdrawal from "./page/mypage/UserWithdrawal";


const history = createBrowserHistory();

function App() {
  const [connection, setConnection] = useState("");

  const connectionTest = () => {
    axios
      .get("http://localhost:8086/")
      .then((res) => {
        setConnection(res.data);
      })
      .catch((err) => {
        setConnection(err.message);
      });
  };

  useEffect(() => {
    connectionTest();
  }, []);

  return (
    <div className="App">
      <p>{connection}</p>
      <Layout>
        <Routes history={history}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage" element={<UserProfile />} />
          <Route path="/mypage/:id" element={<UserProfile />} />
          <Route path="/mypage/edit" element={<UserEdit />} />
          <Route path="/mypage/withdrawal" element={<UserWithdrawal />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
