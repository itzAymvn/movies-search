import React, { useState, useEffect } from "react";
import MovieCard from "./Component/MovieCard.js";
import "./App.css";

function App() {
    const [Movies, setMovies] = useState([]);
    const [Search, setSearch] = useState("Batman");

    useEffect(() => {
        let key = "1342a532";
        const getMovies = async (s) => {
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${key}&s=${s}`
            );
            const result = await response.json();
            setMovies(result.Search);
        };
        if (Search) getMovies(Search);
    }, [Search]);

    return (
        <>
            <div className="Utils">
                <h1 className="title">Look for movies !!</h1>
                <input
                    className="search"
                    placeholder="Search for a movie"
                    type="text"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
            </div>
            {typeof Movies !== "undefined" ? (
                <div className="movies">
                    {Movies.map((movie, i) =>
                        movie.Poster !== "N/A" ? (
                            <MovieCard key={i} movie={movie} />
                        ) : null
                    )}
                </div>
            ) : (
                <h1>Not Found</h1>
            )}
        </>
    );
}

export default App;
