import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from '../components/SearchPage/SearchForm/SearchForm';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<SearchForm />);
});

it('renders correctly', () => {
  const tree = renderer.create(<SearchForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
