import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center">
            <div className="footer-links">
              <a href="#home">Home</a>
              {/* <a href="#instagram">Instagram</a> */}
              <a href="#linkedin">LinkedIn Posts</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#publications">Publications</a>
              <a href="#certifications">Certifications</a>
              <a href="#achievements">Achievements</a>
            </div>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>© 2024 Shubham Kumar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}