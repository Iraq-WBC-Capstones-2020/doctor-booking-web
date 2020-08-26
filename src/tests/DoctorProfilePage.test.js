import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DoctorProfilePage from '../containers/DoctorProfilePage/DoctorProfilePage';
import { renderHook } from '@testing-library/react-hooks';

test('DoctorProfilePage  is rendering  ', () => {
  renderHook(<DoctorProfilePage />);
});

// test('DoctorProfilePage run well ', () => {
//   const tree = renderer.create(<DoctorProfilePage />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
