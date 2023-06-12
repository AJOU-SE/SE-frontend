import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

function MyPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  // const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8080/member");
        setUserInfo(response.data);
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchUserInfo();
  }, []);

  const goEdit = () => {
    navigate("/mypage/edit");
  };
  const goWithdraw = () => {
    navigate("/mypage/withdraw");
  };

  return (
    <Container fluid className="main">
      <div className="head mgbt">회원 정보</div>
      <div className="UserInfo">
        <ul className="UserInfo">
          <li className="UserInfo">
            <span className="b">이메일 : </span> {userInfo.email}
          </li>
          <li className="UserInfo">
            <span className="b">이름 : </span> {userInfo.name}
          </li>
          <li className="UserInfo">
            <span className="b">닉네임 : </span> {userInfo.nickname}
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <Button
          variant="primary"
          type="button"
          className="mgtp"
          onClick={goEdit}
        >
          회원정보 수정
        </Button>
        <Button
          variant="danger"
          type="button"
          className="mgtp mglf-3"
          onClick={goWithdraw}
        >
          회원 탈퇴
        </Button>
      </div>
    </Container>
  );
}

export default MyPage;
