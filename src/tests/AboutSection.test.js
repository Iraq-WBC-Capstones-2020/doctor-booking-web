import React from 'react';
import { render } from '@testing-library/react';
import AboutSection from '../components/AboutSection/AboutSection';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
test('About section renders', () => {
  render(
    <MemoryRouter>
      <AboutSection />
    </MemoryRouter>
  );
});

test('About section renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <AboutSection />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
