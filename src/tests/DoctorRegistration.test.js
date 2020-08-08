import React from 'react';
import { render } from '@testing-library/react';
import DoctorRegistration from '../containers/DoctorRegistration/DoctorRegistration';
import renderer from 'react-test-renderer';
test('Doctor Registration is rendering ', () => {
  render(<DoctorRegistration />);
});

test('Doctor Registration renders correctly', () => {
  const tree = renderer.create(<DoctorRegistration />).toJSON();
  expect(tree).toMatchSnapshot();
});
