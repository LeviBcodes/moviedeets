import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";
import axios from "axios";


const Media = (props) => {
    const movieID = props.imdbID;
    const[media, setMedia] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
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
            <div role="status">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        }
        <div className="container mx-auto shadow-sm hover:shadow-lg rounded-md transition-all duration-200 ease-linear cursor-pointer py-4 px-2">
            {media.Poster && <img src={`${media.Poster}`} alt={`${media.Title} movie poster`} className="rounded-md mx-auto h-full w-full"/>}
            {media.Title && <h1 className="font-bold text-2xl mx-auto">{media.Title}</h1>}
            {media.Year && <h2 className="text-black">{media.Year}</h2>}
            <button className="text-white font-medium rounded-md px-2 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto">Details</button>
            <div id="details" className="hidden">
            {media.Plot && <p className="text-black ">{media.Plot}</p>}
            {media.Genre && <p className="text-black"><strong>Genre: </strong>{media.Genre}</p>}
            {media.Language && <p className="text-black"><strong>Language: </strong>{media.Language}</p>}
            {media.Runtime && <p className="text-black"><strong>Runtime: </strong>{media.Runtime}</p>}
            {media.Actors && <p className="text-black "><strong>Starring: </strong>{media.Actors}</p>}
            {media.Director && <p className="text-black "><strong>Directed By: </strong>{media.Director}</p>}
            {media.Writer && <p className="text-black "><strong>Written By: </strong>{media.Writer}</p>}
            {media.Awards && <p className="text-black "><strong>Awards: </strong>{media.Awards}</p>}
            {media.Production && <p className="text-black "><strong>Production: </strong>{media.Production}</p>}
            {media.Country && <p className="text-black "><strong>Country: </strong>{media.Country}</p>}
            {media.BoxOffice && <p className="text-black "><strong>Box Office: </strong>{media.BoxOffice}</p>}
            {media.imdbRating && <p className="text-black "><strong>Imbdb Rading: </strong>{media.imdbRating}</p>}
            {media.imdbVotes && <p className="text-black "><strong>Imdb Votes: </strong>{media.imdbVotes}</p>}
            {media.Type && <p className="text-black "><strong>Media Type: </strong>{media.Type}</p>}
            {media.totalSeasons && <p className="text-black "><strong>Total Seasons: </strong>{media.totalSeasons}</p>}
            {media.Website && <p className="text-black "><strong>Website: </strong>{media.Website}</p>}
            </div>
        </div>
        </>
    )
}

export default Media;