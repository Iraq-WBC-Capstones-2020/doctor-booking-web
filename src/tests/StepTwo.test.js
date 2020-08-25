import React from 'react';
import StepTwo from '../components/DoctorRegisterPage/StepTwo/StepTwo';
import renderer from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import DoctorInfoProvider from '../DoctorContext';

it('StepTwo render1', () => {
  renderHook(() => <StepTwo />);
});

it('StepTwo renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <DoctorInfoProvider>
          <StepTwo />
        </DoctorInfoProvider>
      </>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
