import React from 'react';
import render from '@testing-library/react';
import renderer from 'react-test-renderer';
import OurServices from '../Containers/OurServices/OurServices';
import { Container } from 'react-bootstrap';
it('renders correctly', () => {
  const tree = renderer.create(<OurServices />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('render', () => {
  render(<OurServices />);
});
