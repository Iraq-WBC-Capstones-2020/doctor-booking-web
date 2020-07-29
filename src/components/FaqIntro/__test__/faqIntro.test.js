import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FaqIntro from '../FaqIntro';

test('faq intro section is rendering  ', () => {
  render(<FaqIntro />);
});

test('faq intro section run well ', () => {
  const tree = renderer.create(<FaqIntro />).toJSON();
  expect(tree).toMatchSnapshot();
});
