import React from 'react';
import { render } from '@testing-library/react';
import StepTwo from '../components/DoctorRegisterPage/StepTwo/StepTwo';
import renderer from 'react-test-renderer';
it('StepTwo render1', () => {
  render(<StepTwo />);
});

it('StepTwo renders correctly', () => {
  const tree = renderer.create(<StepTwo />).toJSON();
  expect(tree).toMatchSnapshot();
});
