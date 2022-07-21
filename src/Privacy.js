import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";

const Privacy = () => {
    const [loading, setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[showPrivacy, setShowPrivacy] = useState(false)

    return (
        <>
         <button class="text-lg block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0" onClick={()=>setShowPrivacy(true)}>
            <h1 class="">Privacy Policy</h1>
         </button>
         {showPrivacy &&
            <div id="privacy" className="z-10 mx-auto bottom-0 top-0 box-border fixed left-0 right-0 bg-white rounded-md transition-all ease-linear duration-400 text-black" onClick={()=> setShowPrivacy(false)}>
                <h1 className="pt-40 text-3xl font-bold">Privacy Policy</h1>
                
            </div>
        }
        </>
    )
}

export default Privacy;
