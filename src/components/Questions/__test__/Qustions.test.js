import React from 'react';
import Qustions from '../Qustions';
import renderer from 'react-test-renderer';
// import { render } from '@testing-library/react';w

// test('Qustions is rendering ', () => {
//   render(<Qustions />);
// });

test('Qustions (array component)  of faq page render correctly', () => {
  const tree = renderer.create(<Qustions />).toJSON();
  expect(tree).toMatchSnapshot();
});
