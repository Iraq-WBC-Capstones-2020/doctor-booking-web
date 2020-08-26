import React from 'react';
import renderer from 'react-test-renderer';
import Booking from '../components/Booking/Booking';

test('Boooking page run well run well ', () => {
  const tree = renderer.create(<Booking />).toJSON();
  expect(tree).toMatchSnapshot();
});
