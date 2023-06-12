import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";
import { createBrowserHistory } from "history";

import Main from "./page/Main";
import Login from "./page/Login";
import Register from "./page/Register";
import MyPage from "./page/MyPage";
import InfoEdit from "./page/InfoEdit";
import InfoWithdraw from "./page/InfoWithdraw";
import Layout from "./component/Layout";

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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/infoedit" element={<InfoEdit />} />
          <Route path="/infowithdraw" element={<InfoWithdraw />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
