import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assests/img/Untitled-1.svg";
// import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";
import navIcon4 from '../assests/img/icons8-whatsapp (2).svg';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a> */}
              <a href="https://www.facebook.com/zaid.gatta.5" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/zaid.gatta12/" tar><img src={navIcon3} alt="Icon" /></a>
              <a  href="https://wa.me/+923166448747" target="blank"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}