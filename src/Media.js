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
    const api = "https://www.omdbapi.com/?apikey=a619790";
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
                <div className="w-9 h-9 animate-spin rounded-full bg-gradient-to-r from-red-500 to-yellow-300 ">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-white rounded-full border-2 border-white"></div>
                </div>
            </div>
            }
            <button className="container max-w-xs mx-auto shadow-md hover:shadow-lg rounded-md transition-all duration-150 ease-linear cursor-pointer py-4 px-2 hover:scale-105" onClick={() => setShowDetails(true)}>
                {media.Poster == "N/A" ? <img src={no_poster} alt={`${media.Title} movie poster`} className="rounded-md mx-auto h-30 w-full border-2 border-gray-300"/> : <img src={`${media.Poster}`} alt={`${media.Title} movie poster`} className="rounded-md mx-auto h-full w-full object-cover"/>}
                {media.Title && <h1 className="font-bold text-xl mx-auto">{media.Title}</h1>}
                {media.Year && <h2 className="text-black text-md py-1 font-semibold">{media.Year}</h2>}
                <div className="text-white font-bold rounded-md sm:mx-12 lg:mx-20 bg-gradient-to-r from-red-500 to-yellow-400 hover:scale-105 duration-100 ease-linear">Details</div>
            </button>
            {showDetails && movieID === media.imdbID &&
            <div id="details" className="py-10 z-10 text-center mx-auto bottom-0 top-0 box-border fixed left-0 right-0 bg-black bg-opacity-95 rounded-md transition-all ease-linear duration-400 text-white overflow-auto" onClick={()=>setShowDetails(false)}>
                <div className="container mx-auto py-20 sm:grid sm:grid-cols-2 my-6">
                    <div className="container mx-auto col-span-3 text-center">
                        {media.Title && <h1 className="font-bold text-3xl mx-auto py-4">{media.Title} ({media.Year})</h1>}
                    </div>
                    <div className="col-span-3">
                        {media.Poster == "N/A" ? <img src={no_poster} alt={`${media.Title} movie poster`} className="rounded-md mx-auto border-2 border-gray-300 m-5 max-h-96 "/> : <img src={`${media.Poster}`} alt={`${media.Title} movie poster`} className="rounded-md mx-auto m-6"/>}
                    </div>
                    <div className="col-span-3 lg:px-36 px-10">
                        {media.Plot && <p className="font-medium text-2xl my-5">{media.Plot}</p>}
                    </div>
                    <div className="col-span-3 lg:px-36 px-10">
                        <hr className="container mx-auto opacity-100 bg-gradient-to-r from-red-600 to-yellow-300 w-5"/>
                    </div>
                    <div className="text-lg my-5 col-span-3 lg:px-36 px-10 sm:w-50">
                        {media.Genre && <p className="py-1"><strong>Genre: </strong>{media.Genre}</p>}
                        {media.Rated && <p className="py-1"><strong>Rated: </strong><span className={`${media.Rated !== "N/A" ? 'border border-white px-1 ml-1 text-xs' : ''}`}>{media.Rated}</span></p>}
                        {media.Runtime && <p className="py-1"><strong>Runtime: </strong><span className="px-1"><i class="fa-solid fa-clock"></i></span>{media.Runtime}</p>}
                        {media.Actors && <p className="py-1"><strong>Starring: </strong>{media.Actors}</p>}
                        {media.Director && <p className="py-1"><strong>Directed By: </strong>{media.Director}</p>}
                        {media.Writer && <p className="py-1"><strong>Written By: </strong>{media.Writer}</p>}
                        {media.Awards && <p className="py-1"><strong>Awards: </strong>{media.Awards}</p>}
                        {media.Country && <p className="py-1"><strong>Country: </strong>{media.Country}</p>}
                        {media.Language && <p className="py-1"><strong>Language: </strong>{media.Language}</p>}
                        {media.BoxOffice && <p className="py-1"><strong>Box Office: </strong>{media.BoxOffice}</p>}
                        {media.Ratings && <p className="py-1"><strong>Ratings: </strong>{media.Ratings.map(rating => <p key={rating.Source} className="text-white font-medium">{rating.Source}: <span className={`${rating.Source}  font-light`}>{rating.Value}</span></p>)}</p>}
                        {media.Metascore && <p className="py-1"><strong>Metascore: </strong><span>{media.Metascore}</span></p>}
                        {media.imdbVotes && <p className="py-1"><strong>Imdb Votes: </strong><span className="px-1"><i class="fa-solid fa-thumbs-up"></i></span>{media.imdbVotes}</p>}
                        {media.Production && <p className="py-1"><strong>Production: </strong>{media.Production}</p>}
                        {media.Type && <p className="py-2"><strong>Media Type: </strong>{media.Type}</p>}
                        {media.totalSeasons && <p className="py-1"><strong>Total Seasons: </strong>{media.totalSeasons}</p>}
                    </div>
                    <div className="col-span-3 lg:px-36 px-10">
                        <hr className="container mx-auto opacity-100 bg-gradient-to-r from-red-500 to-yellow-200 w-5"/>
                    </div>
                    <div className="col-span-3 lg:px-36 text-center py-3 my-3">
                        <button className="text-white text-xl font-bold rounded-md px-2 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto hover:scale-105 transition-all ease-linear duration-300">Close</button>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Media;