import React from 'react';
import Jobs from './components/Jobs';
import QueryForm from './components/QueryForm';
import Pagination from './components/Pagination';

const App = () => {
  return (
    <>
      <QueryForm />
      <Jobs />
      <Pagination />
    </>
  );
}

export default App;
