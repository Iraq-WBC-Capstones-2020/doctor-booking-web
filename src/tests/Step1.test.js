import React from 'react';
import { render } from '@testing-library/react';
import Step1 from '../components/DoctorRegisterPage/Step1/Step1';
import renderer from 'react-test-renderer';
it('Step 1 render1', () => {
  render(<Step1 />);
});

it('Step 1 renders correctly', () => {
  const tree = renderer.create(<Step1 />).toJSON();
  expect(tree).toMatchSnapshot();
});
