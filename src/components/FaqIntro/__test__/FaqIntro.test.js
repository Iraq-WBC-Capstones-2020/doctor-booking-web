import React from 'react';
import FaqIntro from '../FaqIntro';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';

// test('FaqIntro is rendering ', () => {
//   render(<FaqIntro />);
// });

test('intro section of faq page render correctly', () => {
  const tree = renderer.create(<FaqIntro />).toJSON();
  expect(tree).toMatchSnapshot();
});
