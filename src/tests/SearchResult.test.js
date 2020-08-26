import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '../components/SearchPage/SearchResult/SearchResult';
import renderer from 'react-test-renderer';
import DoctorInfoProvider from '../DoctorContext';
it('render1', () => {
  render(
    <DoctorInfoProvider>
      <SearchResult length={0} />
    </DoctorInfoProvider>
  );
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DoctorInfoProvider>
        <SearchResult length={0} />
      </DoctorInfoProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
