import React from 'react';
import StepOne from '../components/DoctorRegisterPage/StepOne/StepOne';
import renderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import DoctorInfoProvider from '../DoctorContext';
import 'mutationobserver-shim';

it('Step one renders', () => {
  renderHook(() => <StepOne />);
});
it('Step 1 renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <DoctorInfoProvider>
          <StepOne />
        </DoctorInfoProvider>
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
