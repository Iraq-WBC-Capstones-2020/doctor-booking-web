import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../containers/Footer/Footer';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
test('footer is rendering ', () => {
  render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
});

test('footer renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
