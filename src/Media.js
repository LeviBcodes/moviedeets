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
        })
        .catch(err => {
            console.log(err);
        })
    }
    , [])

    return(
        <div className="container mx-auto">
            {media.Poster && <img src={`${media.Poster}`} alt="poster" className=""/>}
            {media.Title && <h1 className="font-bold text-2xl ">{media.Title}</h1>}
            {media.Year && <h2 className="text-black">{media.Year}</h2>}
            <button className="text-white font-medium rounded-md px-2 bg-gradient-to-r from-pink-600 to-purple-600">Details</button>
            <div id="details" className="">
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
    )
}

export default Media;