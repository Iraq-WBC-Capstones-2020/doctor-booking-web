import React from 'react';
import { render } from '@testing-library/react';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<NewsLetter />);
});

it('renders correctly', () => {
  const tree = renderer.create(<NewsLetter />).toJSON();
  expect(tree).toMatchSnapshot();
});
