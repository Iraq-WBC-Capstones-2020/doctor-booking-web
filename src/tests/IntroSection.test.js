import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import IntroSection from '../components/HomePage/IntroSection/IntroSection';

test('Intro section  is rendering  ', () => {
  render(<IntroSection />);
});

test('Intro  section run well ', () => {
  const tree = renderer.create(<IntroSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
