import React from 'react';
import { render } from '@testing-library/react';
import AppSection from '../components/AppSection/AppSection';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<AppSection />);
});

it('renders correctly', () => {
  const tree = renderer.create(<AppSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
