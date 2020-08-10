import React from 'react';
import GetInTouch from '../GetInTouch';
import renderer from 'react-test-renderer';

it('GetInTouch render correctly', () => {
  const tree = renderer.create(<GetInTouch />).toJSON();
  expect(tree).toMatchSnapshot();
});
