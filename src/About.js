import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const About = () => {
    return (
        <>
            <div id="about" className="z-10 mx-auto bottom-0 top-0 box-border fixed left-0 right-0 bg-black bg-opacity-95 rounded-md transition-all ease-linear duration-400 text-white overflow-auto" >
                <h1 className="pt-40 text-3xl font-bold">About this site</h1>
                <p className=" ">Hi, I'm Levi Burland. I created this web application using the following technologies:</p>
                <ul>
                    <li>React</li>
                    <li>Axios</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
        </>
    )
}

export default About;