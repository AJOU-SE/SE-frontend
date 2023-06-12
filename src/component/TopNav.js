import React, { useEffect } from "react";
import {
  Button,
  Form,
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/userSlice";

export default function TopNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   if (sessionStorage.getItem("email") === null) {
  //     // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
  //     console.log("isLogin ?? :: ", user.isLogin);
  //   } else {
  //     // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
  //     // 로그인 상태 변경
  //     console.log("isLogin ?? :: ", user.isLogin);
  //   }
  // });

  const handleLogout = () => {
    axios
      .get("http://localhost:8086/member/logout")
      .then((res) => {
        window.alert("로그아웃 성공!");
        dispatch(logoutUser());
        navigate("/login");
      })
      .catch((err) => {
        window.alert("로그아웃 실패!");
      });
  };

  return (
    <Navbar key="sm" bg="white" expand="sm" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/" className="title">
          아주조은학식
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-sm"
          aria-labelledby="offcanvasNavbarLabel-expand-sm"
          placement="end"
          responsive="sm"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
              {/* <img
                src="/img-system01.svg"
                width="30"
                fill="#0a5ca8"
                alt="아주좋은학식 logo"
              /> */}
              <Offcanvas.Title
                className="title"
                id={"offcanvasNavbarLabel-expand-sm"}
              >
                아주조은학식
              </Offcanvas.Title>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {user.isLogin === false ? (
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/mypage">마이페이지</Nav.Link>
                <Nav.Link onClick={handleLogout}>로그아웃</Nav.Link>
              </Nav>
            ) : (
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link href="/login">로그인</Nav.Link>
                <Nav.Link href="/register">회원가입</Nav.Link>
              </Nav>
            )}
            <hr />
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="메뉴 입력"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="secondary">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
