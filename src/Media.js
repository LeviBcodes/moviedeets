import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";
import axios from "axios";
import no_poster from "./No_picture_available.png"


const Media = (props) => {
    const movieID = props.imdbID;
    const[media, setMedia] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[showDetails, setShowDetails] = useState(false);
    const api = "http://www.omdbapi.com/?apikey=a619790";
    useEffect(() => {
        setIsLoading(true);
        axios.get(`${api}&i=${movieID}&plot=full`)
        .then(res => {
            setMedia(res.data);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }
    , [])

    return(
        <>
            {isLoading &&         
            <div className="flex justify-center items-center">
                <div className="w-9 h-9 animate-spin rounded-full bg-gradient-to-r from-purple-600 to-pink-600 ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full border-2 border-white"></div>
                </div>
            </div>
            }
            <button className="container mx-auto shadow-sm hover:shadow-lg rounded-md transition-all duration-100 ease-linear cursor-pointer py-4 px-2 hover:scale-105" onClick={() => setShowDetails(true)}>
                {media.Poster == "N/A" ? <img src={no_poster} alt={`${media.Title} movie poster`} className="rounded-md mx-auto h-full w-full border-2 border-gray-300"/> : <img src={`${media.Poster}`} alt={`${media.Title} movie poster`} className="rounded-md mx-auto h-full w-full object-cover"/>}
                {media.Title && <h1 className="font-bold text-xl mx-auto">{media.Title}</h1>}
                {media.Year && <h2 className="text-black text-md py-1">{media.Year}</h2>}
                <button className="text-white font-medium rounded-md px-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto">Details</button>
            </button>
            {showDetails && movieID === media.imdbID &&
            <div id="details" className="bottom-0 top-0 box-border fixed left-0 right-0 bg-black bg-opacity-95 rounded-md transition-all ease-linear duration-400 text-white overflow-auto" onClick={()=>setShowDetails(false)}>
                <div className="container mx-auto py-32 sm:grid sm:grid-cols-3 bg-black rounded-md my-16">
                    <div className="col-span-3">
                        {media.Title && <h1 className="font-bold text-2xl mx-auto border-b border-x-white py-4">{media.Title} ({media.Year})</h1>}
                    </div>
                    <div className="">
                        {media.Poster == "N/A" ? <img src={no_poster} alt={`${media.Title} movie poster`} className="rounded-md mx-auto border-2 border-gray-300 m-5"/> : <img src={`${media.Poster}`} alt={`${media.Title} movie poster`} className="rounded-md mx-auto py-5"/>}
                    </div>
                    <div className="pr-20">
                        {media.Plot && <p className="font-medium text-lg py-2">{media.Plot}</p>}
                    </div>
                    <div className="">
                        {media.Genre && <p className=""><strong>Genre: </strong>{media.Genre}</p>}
                        {media.Language && <p className=""><strong>Language: </strong>{media.Language}</p>}
                        {media.Runtime && <p className=""><strong>Runtime: </strong>{media.Runtime}</p>}
                        {media.Actors && <p className=""><strong>Starring: </strong>{media.Actors}</p>}
                        {media.Director && <p className=""><strong>Directed By: </strong>{media.Director}</p>}
                        {media.Writer && <p className=""><strong>Written By: </strong>{media.Writer}</p>}
                        {media.Awards && <p className=""><strong>Awards: </strong>{media.Awards}</p>}
                        {media.Production && <p className=""><strong>Production: </strong>{media.Production}</p>}
                        {media.Country && <p className=""><strong>Country: </strong>{media.Country}</p>}
                        {media.BoxOffice && <p className=""><strong>Box Office: </strong>{media.BoxOffice}</p>}
                        {media.imdbRating && <p className=""><strong>Imbdb Rading: </strong>{media.imdbRating}</p>}
                        {media.imdbVotes && <p className=""><strong>Imdb Votes: </strong>{media.imdbVotes}</p>}
                        {media.Type && <p className=""><strong>Media Type: </strong>{media.Type}</p>}
                        {media.totalSeasons && <p className=""><strong>Total Seasons: </strong>{media.totalSeasons}</p>}
                        {media.Website && <p className=""><strong>Website: </strong>{media.Website}</p>}
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Media;