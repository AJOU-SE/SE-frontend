// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Container, Form, Button, FloatingLabel } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { logoutUser } from "../redux/userSlice";

// function InfoWithdraw() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [password, setPassword] = useState("");
//   const loginedUser = useSelector((state) => state.user);

//   const handleInputChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.delete(`http://localhost:8080/member/${loginedUser.id}`);
//       console.log("회원 탈퇴 성공!");
//       dispatch(logoutUser());
//       navigate("/main");
//     } catch (err) {
//       console.log("회원 탈퇴 실패", err.response.data.message);
//     }
//   };

//   const deleteCancel = () => {
//     navigate("/mypage");
//   };

//   return (
//     <Container fluid className="main">
//       <div className="head mgbt">회원 탈퇴</div>
//       <Form onSubmit={handleSubmit}>
//         <FloatingLabel
//           controlId="floatingInput"
//           label="비밀번호"
//           className="mb-3"
//         >
//           <Form.Control
//             id="password"
//             type="password"
//             placeholder="비밀번호를 입력하세요."
//             value={password}
//             onChange={handleInputChange}
//             required
//           />
//         </FloatingLabel>
//         <Button
//           type="button"
//           variant="secondary"
//           className="mgtp"
//           onClick={deleteCancel}
//         >
//           취소하기
//         </Button>
//         <hr />
//         <Button variant="danger" type="submit">
//           회원탈퇴
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default InfoWithdraw();
