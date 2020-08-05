import React from 'react';
import Qustions from '../Questions';
import renderer from 'react-test-renderer';

test('Qustions (array component)  of faq page render correctly', () => {
  const tree = renderer.create(<Qustions />).toJSON();
  expect(tree).toMatchSnapshot();
});
