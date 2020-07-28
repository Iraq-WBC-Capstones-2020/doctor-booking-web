import React from 'react';
import renderer from 'react-test-renderer';
import OurServices from '..//Containers/OurServices/OurServices';
import { Container } from 'react-bootstrap';
it('renders correctly', () => {
  const tree = renderer
    .create(<Container/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});