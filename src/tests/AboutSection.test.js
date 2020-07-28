import React from 'react';
import { render } from '@testing-library/react';
import AboutSection from '../components/AboutSection/AboutSection';
import renderer from 'react-test-renderer';
import About from '../containers/AboutPage/About';

test('About section renders', () => {
  render(<AboutSection />);
});

test('About section renders correctly', () => {
  const tree = renderer.create(<AboutSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
