import React from "react";
// import { Button } from "./Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
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
      </div>
    </div>
  );
};

export default Footer;
