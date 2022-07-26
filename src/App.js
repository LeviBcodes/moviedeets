import React, {useState, useRef, useCallback, useEffect} from 'react';
import useMediaSearch from './useMediaSearch';
import Media from './Media';
import './index.css';
import About from './About';
import Privacy from './Privacy';
import initFilmLayer, { animation } from './initFilmLayer';

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

  useEffect(() => {
    animation()
  }, [])
  
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
      <nav className="z-20 mx-auto text-center py-5 top-0 sticky bg-black shadow-sm align-items-center">
        <div className="container sm:flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <img src="../favicon.ico" class="w-8" alt="" />
            <a href="/" className="text-white text-2xl font-bold">
              <h1 className="mr-3 px-3 text-white text-4xl font-bold">MovieDeets</h1>
            </a>
          </div>
          <div className="flex md:order-2">
            <input type="text" onClick={() => setQuery(() => "")} value={query} onChange={handleSearch} className="rounded-md w-full focus:ring-4 px-5 text-lg" placeholder='Search media'/>
          </div>
          <div className="flex md:order-3">
            <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span class="sr-only">Open menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-3" id="navbar-search">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <About />
              </li>
              <li>
                <Privacy />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto lg:gap-4 lg:grid lg:grid-cols-5 sm:gap-2 sm:grid sm:grid-cols-3 px-16 py-6 lg:px-20">
        {loading && <p>Loading...</p>}
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