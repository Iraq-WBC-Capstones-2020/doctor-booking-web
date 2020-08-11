import React from 'react';
import { render } from '@testing-library/react';
import StepOne from '../components/DoctorRegisterPage/StepOne/StepOne';
import renderer from 'react-test-renderer';
it('Step 1 render1', () => {
  render(<StepOne />);
});

it('Step 1 renders correctly', () => {
  const tree = renderer.create(<StepOne />).toJSON();
  expect(tree).toMatchSnapshot();
});
