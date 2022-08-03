import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const Privacy = () => {
    const [loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[showPrivacy, setShowPrivacy] = useState(false)

    return (
        <div>
         <button className="text-lg block hover:text-black hover:bg-white transition-all hover:rounded-md duration-100 ease-in-out py-2 pr-4 pl-3 text-white  border-gray-100 md:border-0 md:p-0 " onClick={()=>setShowPrivacy(true)}>
            <h1 className="hover:text-black hover:bg-white lg:px-2 transition-all ease-in-out duration-400 hover:rounded-md">Privacy Policy</h1>
         </button>
         {showPrivacy &&
            <div id="privacy" className="z-10 h-screen mx-auto box-border fixed bottom-0 bg-opacity-95 top-0 left-0 right-0 bg-black rounded-md transition-all ease-linear duration-400 text-black" onClick={()=> setShowPrivacy(false)}>
                <div className="sm:pt-40 opacity-100 w-96 mx-auto my-10">
                    <div className="bg-white rounded-lg mx-auto container px-4 py-5 opacity-100 z-20">
                        <div className="flex justify-between rounded-t border-b pb-2 opacity-100 my-4">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Privacy Policy
                            </h3>
                            <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="mx-auto container py-7 text-left">
                            <p className="text-black text-xl">
                                MovieDeets does not collect and or use any personal information from its users.
                            </p>
                        </div>
                        <div className="flex items-center py-3 rounded-b border-t border-gray-200">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Got It</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Privacy;
