import React from 'react';
import renderer from 'react-test-renderer';
import DoctorProfilePage from '../containers/DoctorProfilePage/DoctorProfilePage';

test('DoctorProfilePage run well ', () => {
  const tree = renderer.create(<DoctorProfilePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
