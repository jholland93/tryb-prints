import React from "react";
// import { Button } from "./Button";
import "./Footer.css";
<<<<<<< HEAD
import { Text, Div, Button, Row, Col, Container, Image } from "atomize";
=======
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b

const Footer = () => {
  return (
    <div className="main-footer">
<<<<<<< HEAD
      <Container>
        <Row d="flex">
=======
      <div className="container">
        <div className="row">
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
          {/* Col 1 
          <div className="col-sm">
            <section className="footer-subscription">
              <p className="footer-subscription-heading">Join the Tryb</p>

              <div className="input-areas">
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="footer-input"
                  />
                </form>
                <p className="footer-subscription-text">
                  Unsubscribe at any time
                </p>
             <Button>Subscribe</Button> 
              </div>
            </section>
          </div> *}
          {/* Col 2 */}
<<<<<<< HEAD
          <Col size="4">
            <div p="1rem">
              <h4>Need Help?</h4>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Shipping</li>
              </ul>
            </div>
          </Col>

          {/* Col 3 */}
          <Col size="4">
            <div p="1rem">
              {" "}
              <h4>Tryb Prints</h4>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Login</li>
                <li></li>
              </ul>
            </div>
          </Col>
          {/* Col 4 */}
          <Col size="4" align="center">
            <div p="1rem">
              {" "}
              <h4>Social</h4>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="copyright">
        <p className="col-sm">
          Copyright &copy; Tryb Prints {new Date().getFullYear()} | Privacy
          Policy & Cookies
        </p>
=======
          <div className="col-sm">
            <h4>Need Help?</h4>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Terms & Conditions</li>
              <li>Shipping</li>
            </ul>
          </div>
          {/* Col 3 */}
          <div className="col-sm">
            <h4>Tryb Prints</h4>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Login</li>
              <li></li>
            </ul>
          </div>
          {/* Col 4 */}
          <div className="col-sm">
            <h4>Social</h4>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <hr/>
        <div className="copyright">
          <p className="col-sm">
            Copyright &copy; Tryb Prints {new Date().getFullYear()} | Privacy Policy & Cookies
          </p>
        </div>
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
      </div>
    </div>
  );
};

export default Footer;
