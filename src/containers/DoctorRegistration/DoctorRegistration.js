import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import { Container, Form } from 'react-bootstrap';
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
      {activeStep === 0 ? <StepOne handleNextStep={handleNextStep} /> : ''}
      {activeStep === 1 ? (
        <StepTwo
          handleNextStep={handleNextStep}
          handleBackStep={handleBackStep}
        />
      ) : (
        ''
      )}
      {activeStep === 2 ? <StepThree handleBackStep={handleBackStep} /> : ''}
    </Container>
  );
}

export default DoctorRegistration;
