import React from 'react';
import Booking from '../components/Booking/Booking';
import 'mutationobserver-shim';
import { renderHook } from '@testing-library/react-hooks';
test('Boooking page renders', () => {
  renderHook(<Booking />);
});
// test('Boooking page run well run well ', () => {
//   const tree = renderer.create(<Booking />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
