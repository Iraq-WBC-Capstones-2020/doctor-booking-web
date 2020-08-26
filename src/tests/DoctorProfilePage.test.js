import React from 'react';
import DoctorProfilePage from '../containers/DoctorProfilePage/DoctorProfilePage';
import { renderHook } from '@testing-library/react-hooks';

test('DoctorProfilePage  is rendering  ', () => {
  renderHook(<DoctorProfilePage />);
});

// test('DoctorProfilePage run well ', () => {
//   const tree = renderer.create(<DoctorProfilePage />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
