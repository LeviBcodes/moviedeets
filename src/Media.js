import React, {useState, useEffect} from "react";
import './index.css';
import App from "./App";
import axios from "axios";


const Media = (props) => {
    const movieID = props.imdbID;
    const[movie, setMovie] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const api = "http://www.omdbapi.com/?apikey=a619790";
    useEffect(() => {
        axios.get(`${api}&i=${movieID}&plot=full`)
        .then(res => {
            setMovie(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    , [])

    return(
        <div className="">
            {movie.Poster && <img src={`${movie.Poster}`} alt="poster" className=""/>}
            {movie.Title && <h1 className="font-bold text-center py-4 text-2xl">{movie.Title}</h1>}
            <div id="details" className="">
            {movie.Year && <h2 className="text-black">{movie.Year}</h2>}
            <button className="text-black bg-gradient-to-r from-pink-600 to-purple-600">Details</button>
            {movie.Plot && <p className="text-black ">{movie.Plot}</p>}
            {movie.Actors && <p className="text-black "><strong>Starring: </strong>{movie.Actors}</p>}
            {movie.Director && <p className="text-black "><strong>Directed By: </strong>{movie.Director}</p>}
            {movie.Writer && <p className="text-black "><strong>Written By: </strong>{movie.Writer}</p>}
            {movie.Awards && <p className="text-black "><strong>Awards: </strong>{movie.Awards}</p>}
            {movie.Production && <p className="text-black "><strong>Production: </strong>{movie.Production}</p>}
            {movie.BoxOffice && <p className="text-black "><strong>Box Office: </strong>{movie.BoxOffice}</p>}
            {movie.imdbRating && <p className="text-black "><strong>Imbdb Rading: </strong>{movie.imdbRating}</p>}
            {movie.imdbVotes && <p className="text-black "><strong>Imdb Votes: </strong>{movie.imdbVotes}</p>}
            {movie.Type && <p className="text-black "><strong>Media Type: </strong>{movie.Type}</p>}
            {movie.Website && <p className="text-black "><strong>Website: </strong>{movie.Website}</p>}
            </div>
        </div>
    )
}

export default Media;