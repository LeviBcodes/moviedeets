import React, {useState} from 'react';
import useMediaSearch from './useMediaSearch';

function App() {
  const[query, setQuery] = useState('');
  const[pageNumber, setPageNumber] = useState(1);
  useMediaSearch(query, pageNumber);
  return (
    <>
      <input type="text" />
    </>
  );
}
export default App;