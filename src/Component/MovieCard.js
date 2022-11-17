import "./MovieCard.css";

const MovieCard = ({ movie }) => {
    // movie is an object
    return (
        <div className="movie" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
                src={
                    movie.Poster === "N/A" // if the movie has no poster then display a default image
                        ? "https://via.placeholder.com/150" // placeholder image
                        : movie.Poster // else display the poster
                }
                alt={movie.Title}
            />
        </div>
    );
};

export default MovieCard;
