import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onNickNameHandler = (e) => {
    setNickName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onPasswordCheckHandler = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordCheck("비밀번호가 일치하지 않습니다!");
    }

    const body = {
      email,
      name,
      nickName,
      password,
    };

    axios
      .post("http://localhost:8086/member/join", body)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200 || res.status === 201) {
          window.alert("회원가입을 환영합니다!");
          console.log("회원가입 성공!");
          navigate("/login");
        }
      })
      .catch((err) => {
        window.alert("회원가입 실패!");
      });
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <Container fluid className="main">
      <div className="head mgbt">회원가입</div>
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
        <FloatingLabel
          controlId="floatingInput"
          label="비밀번호 재입력"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password Check"
            value={passwordCheck}
            onChange={onPasswordCheckHandler}
            required
          />
        </FloatingLabel>
        <Row>
          <Col xs="5">
            <FloatingLabel
              controlId="floatingInput"
              label="이름"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={onNameHandler}
              />
            </FloatingLabel>
          </Col>
          <Col xs="7">
            <FloatingLabel
              controlId="floatingInput"
              label="닉네임"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter nickname"
                value={nickName}
                onChange={onNickNameHandler}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
        {/* <div>
          <span className="b">{message}</span>
        </div> */}
        <Button variant="primary" type="submit" className="mgtp">
          제출
        </Button>
      </Form>
      <Button variant="link" type="button" onClick={goLogin}>
        이미 계정이 있나요?
      </Button>
    </Container>
  );
}

export default Register;
