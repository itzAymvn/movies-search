import {useEffect, useState} from "react";
import "./index.css"
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    const searchMovies = async (title) => {
        const res = await fetch(`https://www.omdbapi.com/?apikey=1342a532&s=${title}`)
        const data = await res.json()

        var movieArray = data.Search
        var sortedMovieArray = movieArray.sort((a,b)=>(b.Year - a.Year))
        setMovies(sortedMovieArray)
    }

    useEffect(()=>{
        searchMovies("Superman");
    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e)=>setsearchTerm(e.target.value)}
                />
                <img 
                    src={searchIcon}
                    alt="Search"
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;