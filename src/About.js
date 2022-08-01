import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const About = () => {
    const [loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[showAbout, setShowAbout] = useState(false)

    return (
        <div>
         <button className="text-lg py-2 pr-4 pl-3 text-white hover:text-black hover:bg-white transition-all duration-100 ease-in-out border-gray-100 md:hover:bg-transparent md:border-0 md:p-0" onClick={() => setShowAbout(true)}>
            <h1 className="hover:text-black hover:bg-white lg:px-2 transition-all ease-in-out duration-400 hover:rounded-md">About</h1>
         </button>
            {showAbout &&
                <div id="about" className="z-10 bg-opacity-95 mx-auto bottom-0 top-0 box-border fixed left-0 right-0 bg-black" onClick={() => setShowAbout(false)}>
                    <div className="lg:w-1/2 md:w-96 bg-white mx-auto opacity-100 py-5 sm:my-20 px-10 rounded-md z-20 text-right">
                        <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm items-right">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <h1 className="text-3xl font-bold my-4 text-left">About this web application</h1>
                        <p className="text-xl font-bold my-4 text-left">Hello and welcome, thanks for viewing my web application. I'm Levi Burland, I built this project using the following technologies:</p>
                        <ul className="text-xl py-4 text-left">
                            <li className="my-2"><span className="bg-black px-1 rounded-lg mx-2 text-3xl"><i className="fa-brands fa-react text-[#61DBFB] text-4xl"></i></span>React</li>
                            <li className="my-2"><span className="px-3"><i className="fa-brands fa-square-js text-yellow-500 text-5xl"></i></span>JavaScript</li>
                            <li className="my-2"><span className="px-3"><i class="fa-brands fa-html5 text-orange-500 text-5xl"></i></span>HTML5</li>
                            <li className="my-2"><span className="px-3"><i class="fa-brands fa-css3-alt text-blue-600 text-5xl"></i></span>CSS3</li>
                            <li className="my-2"><span className="px-3"><i class="fa-brands fa-github text-5xl"></i></span>Version Control: <a href="https://github.com/LeviBcodes/moviedeets" target="_blank" className="text-blue-500 hover:text-blue-700 tansition-all duration-200 ease-in-out">Git</a></li>
                            <li className="my-2">Axios</li>
                            <li className="my-2">Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default About;