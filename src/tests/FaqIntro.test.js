import React from 'react';
import FaqIntro from '../components/FaqIntro/FaqIntro';
import renderer from 'react-test-renderer';

test('intro section of faq page render correctly', () => {
  const tree = renderer.create(<FaqIntro />).toJSON();
  expect(tree).toMatchSnapshot();
});
