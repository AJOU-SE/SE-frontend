import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid className="mgtp">
          <nav>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="http://localhost:8080">아주조은학식</a>, made with love
              for a better web
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
