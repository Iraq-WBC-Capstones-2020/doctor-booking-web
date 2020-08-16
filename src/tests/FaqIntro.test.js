import React from 'react';
import FaqIntro from '../components/FaqPage/FaqIntro/FaqIntro';
import renderer from 'react-test-renderer';

test('intro section of faq page render correctly', () => {
  const tree = renderer.create(<FaqIntro />).toJSON();
  expect(tree).toMatchSnapshot();
});
