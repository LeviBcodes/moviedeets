import React, {useState, useRef, useCallback} from 'react';
import useMediaSearch from './useMediaSearch';

function App() {
  const[query, setQuery] = useState('');
  const[pageNumber, setPageNumber] = useState(1);
  
  const {
    loading,
    error,
    media,
    hasMore
  } = useMediaSearch(query, pageNumber)
  
  const observer = useRef()
  
  const lastMediaElementRef = useCallback(node => {
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    }, {threshold: 0.5})
    if(node) observer.current.observe(node)
  }, [])
  
  function handleSearch(e) {
    e.preventDefault();
    setQuery(e.target.value)
    setPageNumber(1)
  }
  
  return (
    <>
      <input type="text" value={query} onChange={handleSearch} className="" />
      {media && media.map((item, index) => {
        item.Search && item.Search.map((value, key) => {
          console.log(value.Title)
      })})}
    </>
  );
}
export default App;