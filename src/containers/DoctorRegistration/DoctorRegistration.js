import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { Container, Button, Form } from 'react-bootstrap';
import StepThree from '../../components/DoctorRegisterPage/StepThree/StepThree';
import StepOne from '../../components/DoctorRegisterPage/StepOne/StepOne';
import StepTwo from '../../components/DoctorRegisterPage/StepTwo/StepTwo';

function DoctorRegistration() {
  const [activeStep, setActiveStep] = useState(0);
  const handleNextStep = () => {
    if (activeStep <= 1) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBackStep = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
    }
  };
  const stepStyleConfig = {
    activeBgColor: '#026fc2',
    completedBgColor: '#28a745',
  };
  return (
    <Container>
      <Form>
        <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
          <Step label="Personal info" />
          <Step label="Career info" />
          <Step label="Clinic info" />
        </Stepper>
      </Form>
      {activeStep === 0 ? (
        <h1>
          <StepOne />
        </h1>
      ) : (
        ''
      )}
      {activeStep === 1 ? <StepTwo /> : ''}
      {activeStep === 2 ? <StepThree /> : ''}

      <Button
        className={activeStep === 0 ? 'disabled mr-3' : 'mr-3'}
        onClick={handleBackStep}
      >
        Back
      </Button>
      <Button onClick={handleNextStep}>Next</Button>
    </Container>
  );
}

export default DoctorRegistration;
