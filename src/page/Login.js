import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/userSlice";

export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [session, setSession] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    axios
      .post("http://localhost:8086/member/login", body)
      .then((res) => {
        if (res.status === 200 || res.status === 201 || res.status === 202) {
          console.log(res.data);
          dispatch(loginUser(res.data.login));
          window.alert("로그인 성공!");
          navigate("/main");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        window.alert("로그인 실패!");
        // if (err.response) {
        //   if (err.response.status === 401) {
        //     setMessage("Nonexistent email or password");
        //   } else {
        //     setMessage("Login failed");
        //   }
        // } else {
        //   setMessage("Login failed");
        // }
      });
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <Container fluid className="main">
      <div className="head mgbt">로그인</div>
      <Row className="sm">
        <Form onSubmit={onSubmitHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="이메일"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={onEmailHandler}
              required
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="비밀번호"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordHandler}
              required
            />
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mgtp">
            로그인
          </Button>
        </Form>
        <Button variant="link" type="button" onClick={goRegister}>
          계정이 없나요?
        </Button>
      </Row>
    </Container>
  );
}
