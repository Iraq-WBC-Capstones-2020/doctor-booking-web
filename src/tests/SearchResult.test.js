import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../components/SearchPage/SearchResult/SearchResult';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<SearchResult />);
});

it('renders correctly', () => {
  const tree = renderer.create(<SearchResult />).toJSON();
  expect(tree).toMatchSnapshot();
});
