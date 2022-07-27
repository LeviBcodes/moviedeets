import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const Privacy = () => {
    const [loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[showPrivacy, setShowPrivacy] = useState(false)

    return (
        <>
         <button class="text-lg block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-slate-700 md:border-0 md:p-0 " onClick={()=>setShowPrivacy(true)}>
            <h1 class="">Privacy Policy</h1>
         </button>
         {showPrivacy &&
            <div id="privacy" className="z-10 h-screen mx-auto box-border fixed bottom-0 top-0 left-0 right-0 bg-black rounded-md transition-all ease-linear duration-400 text-black" onClick={()=> setShowPrivacy(false)}>
                <div className="sm:pt-40 opacity-100">
                    <div class="bg-white rounded-lg mx-auto container px-5 py-5 opacity-100 z-20">
                        <div class="flex justify-between rounded-t border-b pb-2 opacity-100">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Privacy Policy
                            </h3>
                            <button type="button" class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="mx-auto container py-5 text-left">
                            <p className="text-black">
                                MovieDeets does not collect and or use any personal information from its users.
                            </p>
                        </div>
                        <div class="flex items-center py-3 rounded-b border-t border-gray-200">
                            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Got It</button>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Privacy;
