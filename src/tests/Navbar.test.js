import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../containers/Navbar/Navbar';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
test('navbar is rendering ', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
});

test('navbar renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
