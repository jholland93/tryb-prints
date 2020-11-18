<<<<<<< HEAD
import { Input } from "atomize";
import React, { useCallback } from "react";
import {withRouter} from "react-router"
import "../App.css";
import app from "../config/fire"



const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event =>{
    event.preventDefault();
    const{email,password} = event.target.elements;
    try{
      await app.auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error){
      alert(error);
    }
  }, [history]);
   
  return ( 
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>Email
          <Input name="email" type="email" placeholder="Email"/>
        </label>
        <label>password
          <Input name="password" type="password" placeholder="Password"/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
=======
import React, { useRef } from "react";
import "../App.css";
import { Card, Form, Button, Container } from "react-bootstrap";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                {/* EMAIL */}
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                {/* PASSWORD */}
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                {/* CONFIRM EMAIL */}
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="email"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>

                <Button className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Already have an account? Log In
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
>>>>>>> 007da92f9695d416940b6e6e5dc987f8e36bfa8b
