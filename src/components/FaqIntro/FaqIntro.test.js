import React from 'react';
import { render } from '@testing-library/react';
import FaqIntro from './FaqIntro';
import renderer from 'react-test-renderer';

test('faq page is rendering ', () => {
  render(<FaqIntro />);
});

test('faq page render correctly', () => {
  const tree = renderer(<FaqIntro />).toJSON();
  expect(tree).toMatchSnapshot();
});
