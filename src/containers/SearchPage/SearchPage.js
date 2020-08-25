import React, { useState } from 'react';
import SearchForm from '../../components/SearchPage/SearchForm/SearchForm';
import SearchResult from '../../components/SearchPage/SearchResult/SearchResult';
function SearchPage() {
  const [filterDoctors, setFilterDoctors] = useState([]);

  return (
    <>
      <SearchForm
        setFilterDoctors={setFilterDoctors}
        filterDoctors={filterDoctors}
      />
      <SearchResult filterDoctors={filterDoctors} />
    </>
  );
}

export default SearchPage;
