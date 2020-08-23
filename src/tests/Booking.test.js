import React from 'react';
import Booking from '../components/Booking/Booking';
import { render } from '@testing-library/react';

test('Boooking page renders', () => {
  render(<Booking />);
});
// test('Boooking page run well run well ', () => {
//   const tree = renderer.create(<Booking />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
