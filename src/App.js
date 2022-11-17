import React, { useState, useEffect } from "react";
import MovieCard from "./Component/MovieCard.js";
import "./App.css";

function App() {
    const [Movies, setMovies] = useState([]); // Movies is an array of objects
    const [Search, setSearch] = useState("Batman"); // Search is a string of the search term entered by the user (default is Batman)

    useEffect(() => {
        let key = "1342a532";
        const getMovies = async (s) => {
            // s is the search term
            const response = await fetch(
                `https://www.omdbapi.com/?apikey=${key}&s=${s}` // API call
            );
            const result = await response.json();
            setMovies(result.Search);
        };
        if (Search) getMovies(Search);
    }, [Search]); // useEffect will run when Search changes

    return (
        <>
            <div className="Utils">
                <h1 className="title">Look for movies !!</h1>
                <input
                    className="search"
                    placeholder="Search for a movie"
                    type="text"
                    onChange={(event) => {
                        // onChange will run when the user types in the search bar
                        setSearch(event.target.value); // setSearch will change the value of Search
                    }}
                />
            </div>

            {typeof Movies !== "undefined" ? ( // if Movies is not undefined then display the movies
                <div className="movies">
                    {Movies.map(
                        (
                            movie,
                            i // map through the array of objects
                        ) =>
                            movie.Poster !== "N/A" ? (
                                <MovieCard key={i} movie={movie} /> // MovieCard is a component that displays the movie
                            ) : null
                    )}
                </div>
            ) : (
                // if Movies is undefined then display a message
                <h1>Not Found</h1>
            )}
        </>
    );
}

export default App;
