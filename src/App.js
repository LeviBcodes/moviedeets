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
      if(entries[0].isIntersecting){
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if(node) observer.current.observe(node)
  }, [loading, hasMore])
  
  function handleSearch(e) {
    e.preventDefault();
    setQuery(e.target.value)
    setPageNumber(1)
  }
  
  return (
    <>
      <input type="text" value={query} onChange={handleSearch} className="" />
      {media && media.map((item, index) => {
        if(item.Search && item.Search.length - 1) {
          return(
            item.Search && item.Search.map((value, key) => {
              return (
                <div key={key} ref={lastMediaElementRef}>
                  <img src={value.Poster} alt={value.Title} />
                  <p className='text-black font-bold text-2xl'>{value.Title}</p>
                </div>
              )
            })
          )
        }
        else {
          return(
            item.Search && item.Search.map((value, key) => {
              return (
                <div key={key}>
                  <img src={value.Poster} alt={value.Title} />
                  <p className='text-black font-bold text-2xl'>{value.Title}</p>
                </div>
              )
            })
          )
        }
      })}
    </>
  );
}
export default App;