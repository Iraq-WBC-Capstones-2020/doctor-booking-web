import React from 'react';
import { render } from '@testing-library/react';
import SearchForm from '../components/SearchPage/SearchForm/SearchForm';
import renderer from 'react-test-renderer';
import DoctorInfoProvider from '../DoctorContext';

it('render1', () => {
  render(
    <DoctorInfoProvider>
      <SearchForm setFilterDoctors={() => {}} />
    </DoctorInfoProvider>
  );
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <DoctorInfoProvider>
        <SearchForm setFilterDoctors={() => {}} />
      </DoctorInfoProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
