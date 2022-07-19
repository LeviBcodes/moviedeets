import React, {useState, useRef, useCallback} from 'react';
import useMediaSearch from './useMediaSearch';
import Media from './Media';
import './index.css';

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
      <nav className="z-20 container mx-auto text-center py-5 top-0 sticky bg-white shadow-sm">
        <input type="text" value={query} onChange={handleSearch} className="border w-60" />
      </nav>
      <div className="container mx-auto lg:gap-4 lg:grid lg:grid-cols-5 sm:gap-2 sm:grid sm:grid-cols-3">
        {media && media.map((item) => {
          if(item.Search && item.Search.length - 1) {
            return(
              item.Search && item.Search.map((value, key) => {
                return (
                    <div key={key} ref={lastMediaElementRef} className="w-full h-full mx-auto">
                      <Media imdbID={value.imdbID} />
                    </div>
                )
              })
            )
          } else {
            return(
              item.Search && item.Search.map((value, key) => {
                return (
                  <div key={key} className="mx-auto w-full h-full">
                    <Media imdbID={value.imdbID} />
                  </div>
                )
              })
            )
          }
        })}
      </div>
    </>
  );
}
export default App;