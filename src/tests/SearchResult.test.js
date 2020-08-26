import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../components/SearchPage/SearchResult/SearchResult';
import renderer from 'react-test-renderer';
it('render1', () => {
  render(
    <DoctorInfoProvider>
      <SearchResult />
    </DoctorInfoProvider>
  );
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DoctorInfoProvider>
        <SearchResult />
      </DoctorInfoProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
