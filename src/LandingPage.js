import React from 'react'
import Typical from 'react-typical'


function LandingPage() {
  return (
    <>
        <div className='w-full h-full transition-all ease-in-out duration-400 '>
            <div className='flex items-center justify-center h-3/4 w-full'>
                <h1 className='text-3xl lg:text-6xl font-bold'>Find the details on any 
                <Typical
                    className="bg-clip-text bg-gradient-to-r from-red-500 to-yellow-200 text-transparent py-3 font-extrabold"
                    steps={['movie.', 3000, 'series.', 3000, 'video game.', 3000]}
                    loop={Infinity}
                />
                </h1>
            </div>
        </div>
    </>
  )
}

export default LandingPage