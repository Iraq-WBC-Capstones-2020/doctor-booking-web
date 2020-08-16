import React from 'react';
import { render } from '@testing-library/react';
import OurServices from '../components/HomePage/OurServices/OurServices';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<OurServices />);
});

it('renders correctly', () => {
  const tree = renderer.create(<OurServices />).toJSON();
  expect(tree).toMatchSnapshot();
});
