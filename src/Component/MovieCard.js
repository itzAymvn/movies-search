import "./MovieCard.css";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie" key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img
                src={
                    movie.Poster === "N/A"
                        ? "https://via.placeholder.com/150"
                        : movie.Poster
                }
                alt={movie.Title}
            />
        </div>
    );
};

export default MovieCard;
