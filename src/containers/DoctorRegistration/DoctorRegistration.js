import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { Container, Button } from 'react-bootstrap';
import StepThree from '../../components/DoctorRegisterPage/StepThree/StepThree';
import StepOne from '../../components/DoctorRegisterPage/StepOne/StepOne';

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
      <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
        <Step label="Personal info" />
        <Step label="Career info" />
        <Step label="Clinic info" />
      </Stepper>
      {activeStep === 0 ? (
        <h1>
          <StepOne />
        </h1>
      ) : (
        ''
      )}
      {activeStep === 1 ? <h1>step two</h1> : ''}
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
