import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OurServices from '../components/OurServices';

it('render1', () => {
  render(<OurServices />);
});

it('renders correctly', () => {
  const tree = renderer.create(<OurServices />).toJSON();
  expect(tree).toMatchSnapshot();
});
