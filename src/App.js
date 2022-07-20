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
      <nav className="z-20 mx-auto text-center py-5 top-0 sticky bg-black shadow-sm">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center">
            <h1 className="mr-3 h-6 sm:h-9 text-white text-4xl font-bold">MovieDeets</h1>
          </div>
          <div className="flex md:order-2">
            <input type="text" value={query} onChange={handleSearch} className="rounded-md w-full focus:ring-4 px-5 text-lg" placeholder='Search media'/>
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
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mx-auto lg:gap-4 lg:grid lg:grid-cols-5 sm:gap-2 sm:grid sm:grid-cols-3 px-16 py-6 lg:px-20">
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