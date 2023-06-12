import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="sm" className="header">
      <Container className="justify-content-center">
        <img src="/img-system02.svg" width={30} alt="아주조은학식 logo" />
      </Container>
    </Navbar>
  );
}
