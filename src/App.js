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
      <div className="container mx-auto text-center py-5">
        <input type="text" value={query} onChange={handleSearch} className="border border-black w-60 " />
      </div>
      <div className="container mx-auto space-y-2 lg:gap-4 lg:grid lg:grid-cols-5">
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
          }
          else {
            return(
              item.Search && item.Search.map((value, key) => {
                return (
                  <div key={key} className="container mx-auto bg-slate-100">
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