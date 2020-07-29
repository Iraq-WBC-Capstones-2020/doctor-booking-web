import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../containers/Footer/Footer';
import renderer from 'react-test-renderer';
test('footer is rendering ', () => {
  render(<Footer />);
});

test('footer renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
