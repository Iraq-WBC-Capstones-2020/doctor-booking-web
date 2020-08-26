import React, { useState, useEffect } from 'react';
import SearchForm from '../../components/SearchPage/SearchForm/SearchForm';
import SearchResult from '../../components/SearchPage/SearchResult/SearchResult';
function SearchPage() {
  const [filterDoctors, setFilterDoctors] = useState();
  const [input, setInput] = useState('');

  useEffect(() => {
    if (input.length === 0) setFilterDoctors([]);
  }, [input]);

  return (
    <>
      <SearchForm
        setFilterDoctors={setFilterDoctors}
        filterDoctors={filterDoctors}
        input={input}
        setInput={setInput}
      />
      <SearchResult filterDoctors={filterDoctors} />
    </>
  );
}

export default SearchPage;
