import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../containers/Navbar/Navbar';
import renderer from 'react-test-renderer';
test('navbar is rendering ', () => {
  render(<Navbar />);
});

test('navbar renders correctly', () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
