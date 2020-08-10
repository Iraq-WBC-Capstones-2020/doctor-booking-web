import React from 'react';
import { Container } from 'react-bootstrap';
import SignInSection from '../../components/SignInPage/SignInSection';
function SignIn() {
  return (
    <Container className="d-flex justify-content-center page-container">
      <SignInSection />
    </Container>
  );
}

export default SignIn;
