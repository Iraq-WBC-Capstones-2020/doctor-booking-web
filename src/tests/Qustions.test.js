import React from 'react';
import Questions from '../components/FaqPage/Questions/Questions';
import renderer from 'react-test-renderer';

test('Questions (array component)  of faq page render correctly', () => {
  const tree = renderer.create(<Questions />).toJSON();
  expect(tree).toMatchSnapshot();
});
