import React from 'react';
import { render } from '@testing-library/react';
import GetInTouch from '../GetInTouch';
import renderer from 'react-test-renderer';

// test('GetInTouch is rendering ', () => {
//   render(<GetInTouch />);
// });

// test('GetInTouch render correctly', () => {
//   const tree = renderer(<GetInTouch />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

it('GetInTouch render correctly', () => {
  const tree = renderer.create(<GetInTouch />).toJSON();
  expect(tree).toMatchSnapshot();
});
