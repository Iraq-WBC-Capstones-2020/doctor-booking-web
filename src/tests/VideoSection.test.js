import React from 'react';
import { render } from '@testing-library/react';
import VideoSection from '../components/VideoSection/VideoSection';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(<VideoSection />);
});

it('renders correctly', () => {
  const tree = renderer.create(<VideoSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
