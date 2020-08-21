import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { firebaseFunctions } from '../../firebaseFunctions';
import { DoctorContext, ACTIONS } from '../../DoctorContext';
function SignInSection() {
  const [, dispatch] = useContext(DoctorContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    firebaseFunctions.signIn(email, password).then(() => {
      dispatch({ type: ACTIONS.IS_SIGNED_IN, isSignedIn: true });
    });
  };

  return (
    <div className="d-flex align-items-center">
      <div className="welcome-rectangle d-none d-md-flex align-items-center justify-content-center">
        <h1>
          WELCOME <br /> BACK
        </h1>
      </div>
      <div className="signIn-rectangle">
        <Row>
          <Col className="justify-content-center d-flex text-white" sm="12">
            <h3>SIGN IN</h3>
          </Col>
          <Col
            className="justify-content-center d-flex mt-5 text-white"
            sm="12"
          >
            <Form
              className="justify-content-center d-flex flex-column"
              onSubmit={handleSubmit}
            >
              <Form.Group onChange={handleEmail} controlId="email">
                <Form.Control size="lg" type="email" placeholder="E-mail" />
              </Form.Group>
              <Form.Group
                onChange={handlePassword}
                controlId="password"
                className="mt-2"
              >
                <Form.Control
                  size="lg"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="signin-btn btn-lg mt-3"
                variant="primary"
                type="submit"
              >
                Sign In
              </Button>
              <p className="mt-3">
                Don{"'"}t have an account? <a href="#!">Sign Up</a>
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignInSection;
