import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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

export default function UserEdit({ props }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    nickname: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/member/${user.id}`
          // update/{memberId}
        );
        const { data } = response.data;
        setUserInfo({
          name: data.name,
          nickname: data.nickname,
          password: "",
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, [user.id]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const body = {
      name: userInfo.name,
      nickname: userInfo.nickname,
    };

    if (userInfo.password !== userInfo.passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .patch(`http://localhost:8080/member/update/${user.id}`, body)
        .then((res) => {
          if (res.status === 200) {
            alert("회원정보가 수정되었습니다.");
            navigate("/mypage");
          } else alert(res.data.message);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }

  function onChangeHandler(event) {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const goBack = () => {
    navigate("/mypage");
  };

  return (
    <Container fluid className="main">
      <div className="head mgbt">회원 정보</div>
      <hr />
      <Form>
        <Row>
          <Col xs="5">
            <FloatingLabel
              controlId="floatingInput"
              label="닉네임"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={userInfo.name}
                onChange={onChangeHandler}
              />
            </FloatingLabel>
          </Col>
          <Col xs="7">
            <FloatingLabel
              controlId="floatingInput"
              label="비밀번호"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={userInfo.password}
                onChange={onChangeHandler}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Button
          variant="primary"
          type="submit"
          className="mgtp"
          onClick={onSubmitHandler}
        >
          회원정보 제출
        </Button>
        <Button
          type="button"
          variant="danger"
          className="mglf-3 mgtp"
          onClick={goBack}
        >
          취소
        </Button>
      </Form>
    </Container>
  );
}
