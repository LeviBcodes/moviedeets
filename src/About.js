import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const About = () => {
    const [loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[showAbout, setShowAbout] = useState(false)

    return (
        <div>
         <button className="text-lg py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0" onClick={() => setShowAbout(true)}>
            <h1 className="">About</h1>
         </button>
            {showAbout &&
                <div id="about" className="z-10 mx-auto bottom-0 top-0 box-border fixed left-0 right-0 bg-white rounded-md transition-all ease-linear duration-400 text-black" onClick={() => setShowAbout(false)}>
                    <h1 className="pt-40 text-3xl font-bold">About</h1>
                    <p className=" ">Hello and welcome, thank you for viewing my web application. My name is Levi Burland, I built this project using the following technologies:</p>
                    <ul>
                        <li>React</li>
                        <li>Axios</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Version Control: Git</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default About;