import React from 'react';
import { render } from '@testing-library/react';
import OurServices from '../components/OurServices/OurServices
import renderer from 'react-test-renderer';
test('OurServices is rendering ', () => {
  render(<OurServices />);
});

test('OurServices renders correctly', () => {
  const tree = renderer.create(<OurServices />).toJSON();
  expect(tree).toMatchSnapshot();
});
